import Anthropic from '@anthropic-ai/sdk'
import { buildSystemPrompt } from '../../lib/chat-context'
import { checkRateLimit } from '../../lib/rate-limiter'
import { NextResponse } from 'next/server'

const DEFAULT_MODEL = 'claude-sonnet-4-5'
const FALLBACK_MODEL = 'claude-haiku-4-5'

function resolveModel() {
  const raw = process.env.ANTHROPIC_MODEL?.trim()
  if (!raw) return DEFAULT_MODEL
  return raw
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array required' },
        { status: 400 }
      )
    }

    // Get client IP address
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)

    if (!rateLimit.allowed) {
      const resetDate = new Date(rateLimit.resetTime)
      const minutesUntilReset = Math.ceil((rateLimit.resetTime - Date.now()) / 60000)

      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message: `You've reached the message limit (10 per hour). Please try again in ${minutesUntilReset} minutes.`,
          resetTime: resetDate.toISOString()
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': resetDate.toISOString()
          }
        }
      )
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const model = resolveModel()

    // Try primary model, then pinned fallbacks when Anthropic returns not_found_error
    const modelsToTry = [
      model,
      DEFAULT_MODEL,
      FALLBACK_MODEL,
    ].filter(
      (value, index, arr) => arr.indexOf(value) === index
    )

    let response
    let lastError: unknown

    for (const candidate of modelsToTry) {
      try {
        response = await anthropic.messages.create({
          model: candidate,
          max_tokens: 1024,
          system: buildSystemPrompt(),
          messages: messages.map((msg: any) => ({
            role: msg.role,
            content: msg.content,
          })),
        })
        break
      } catch (error) {
        lastError = error
        const apiError = error as { status?: number; error?: { type?: string } }
        const isModelMissing = apiError?.error?.type === 'not_found_error' || apiError?.status === 404

        if (!isModelMissing) {
          throw error
        }
        // Otherwise, keep looping to try next fallback
      }
    }

    if (!response) {
      const modelList = modelsToTry.join(', ')
      const notFoundError =
        lastError instanceof Error ? lastError.message : 'Requested models were not found'
      throw new Error(`Anthropic model resolution failed. Tried: ${modelList}. Last error: ${notFoundError}`)
    }

    const assistantMessage = response.content[0]
    if (assistantMessage.type === 'text') {
      return NextResponse.json(
        { message: assistantMessage.text },
        {
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString()
          }
        }
      )
    }

    return NextResponse.json(
      { error: 'Unexpected response format' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Chat API error:', error)
    const apiError = error as { status?: number; error?: { message?: string } }
    return NextResponse.json(
      { error: apiError?.error?.message || (error instanceof Error ? error.message : 'Something went wrong') },
      { status: typeof apiError?.status === 'number' ? apiError.status : 500 }
    )
  }
}
