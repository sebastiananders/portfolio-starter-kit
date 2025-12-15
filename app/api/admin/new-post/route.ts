import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

type RequestBody = {
  title: string
  slug?: string
  summary: string
  publishedAt: string
  content: string
}

function toSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RequestBody
    const { title, summary, publishedAt, content } = body
    const providedSlug = body.slug || title

    if (!title || !summary || !publishedAt || !content || !providedSlug) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const slug = toSlug(providedSlug)

    if (!slug) {
      return NextResponse.json({ message: 'Invalid slug' }, { status: 400 })
    }

    const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts')
    await fs.mkdir(postsDir, { recursive: true })

    const filePath = path.join(postsDir, `${slug}.mdx`)

    try {
      await fs.access(filePath)
      return NextResponse.json(
        { message: 'A post with this slug already exists' },
        { status: 409 }
      )
    } catch {
      // File does not exist, safe to create
    }

    const fileContent = `---\ntitle: '${title}'\npublishedAt: '${publishedAt}'\nsummary: '${summary}'\n---\n\n${content}\n`

    await fs.writeFile(filePath, fileContent, 'utf8')

    return NextResponse.json({ fileName: `${slug}.mdx` })
  } catch (error) {
    console.error('Failed to create post', error)
    return NextResponse.json(
      { message: 'Unable to create post' },
      { status: 500 }
    )
  }
}
