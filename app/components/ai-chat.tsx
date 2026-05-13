'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatMessage } from './chat-message'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_QUESTIONS = [
  "What's your approach to UX design?",
  "Tell me about your experience with enterprise clients",
  "What projects have you worked on?",
  "What technical skills do you bring to a team?",
]

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [isOpen, setIsOpen] = useState(true)
  const [rateLimitInfo, setRateLimitInfo] = useState<{
    remaining: number
    resetTime: string
  } | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change (only if there are messages)
  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading])

  async function handleSubmit(e: React.FormEvent, customMessage?: string) {
    e.preventDefault()

    const messageToSend = customMessage || input.trim()
    if (!messageToSend || isLoading) return

    setError(null)
    setShowSuggestions(false)

    const userMessage: Message = {
      role: 'user',
      content: messageToSend,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        // Check if rate limit error
        if (res.status === 429) {
          setError(data.message || 'Rate limit exceeded. Try again later.')
        } else {
          throw new Error(data.error || 'Failed to send message')
        }
        return
      }

      // Extract rate limit headers
      const remaining = res.headers.get('X-RateLimit-Remaining')
      const resetTime = res.headers.get('X-RateLimit-Reset')

      if (remaining && resetTime) {
        setRateLimitInfo({
          remaining: parseInt(remaining),
          resetTime
        })
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.message,
        },
      ])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  function handleSuggestionClick(question: string) {
    handleSubmit(new Event('submit') as any, question)
  }

  return (
    <section>
      {messages.length > 0 && (
        <div className="flex justify-center mb-2">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition"
          >
            {isOpen ? 'hide' : 'show'}
          </button>
        </div>
      )}

      {isOpen && (
        <>
          <div className="max-h-[300px] overflow-y-auto">
            {messages.length === 0 && !showSuggestions && (
              <p className="text-sm text-neutral-400 text-center py-8">
                Start a conversation
              </p>
            )}

            {messages.map((msg, idx) => (
              <ChatMessage key={idx} role={msg.role} content={msg.content} />
            ))}

            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="max-w-[80%] rounded-lg bg-neutral-50 dark:bg-neutral-950 px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-3">
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
              <button
                onClick={() => setError(null)}
                className="text-xs text-red-600 dark:text-red-400 underline mt-2"
              >
                Dismiss
              </button>
            </div>
          )}

          {rateLimitInfo && rateLimitInfo.remaining <= 3 && (
            <div className="mb-4 rounded-lg border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 px-4 py-2">
              <p className="text-xs text-amber-800 dark:text-amber-200">
                {rateLimitInfo.remaining} {rateLimitInfo.remaining === 1 ? 'message' : 'messages'} remaining this hour
              </p>
            </div>
          )}
        </>
      )}

      <form onSubmit={handleSubmit} className={`flex gap-2${isOpen && messages.length > 0 ? ' mt-2' : ''}`}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything"
          disabled={isLoading}
          className="flex-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent px-4 py-2 text-sm focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          aria-label="Send"
          className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition disabled:opacity-30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </section>
  )
}
