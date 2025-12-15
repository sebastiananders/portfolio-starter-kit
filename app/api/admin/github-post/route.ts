import { NextResponse } from 'next/server'

type RequestBody = {
  title: string
  slug?: string
  summary: string
  publishedAt: string
  content: string
  author?: string
  image?: string
}

function toSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function escapeYAML(value: string) {
  return value.replace(/"/g, '\\"')
}

export async function POST(req: Request) {
  const owner = process.env.GH_REPO_OWNER
  const repo = process.env.GH_REPO_NAME
  const branch = process.env.GH_REPO_BRANCH || 'main'
  const token = process.env.GH_TOKEN
  const adminSecret = process.env.ADMIN_POST_SECRET

  if (!owner || !repo || !token) {
    return NextResponse.json(
      { message: 'Missing GitHub env vars (GH_REPO_OWNER, GH_REPO_NAME, GH_TOKEN)' },
      { status: 500 }
    )
  }

  if (adminSecret) {
    const provided = req.headers.get('x-admin-secret')
    if (!provided || provided !== adminSecret) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }
  }

  let body: RequestBody
  try {
    body = (await req.json()) as RequestBody
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 })
  }

  const { title, summary, publishedAt, content, author, image } = body
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

  const frontmatter = [
    '---',
    `title: "${escapeYAML(title)}"`,
    `publishedAt: "${publishedAt}"`,
    `summary: "${escapeYAML(summary)}"`,
    author ? `author: "${escapeYAML(author)}"` : null,
    image ? `image: "${image}"` : null,
    '---',
    '',
    content,
    '',
  ]
    .filter(Boolean)
    .join('\n')

  const filePath = `app/blog/posts/${slug}.mdx`
  const githubUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`

  const payload = {
    message: `chore: add blog post ${slug}`,
    content: Buffer.from(frontmatter).toString('base64'),
    branch,
  }

  const res = await fetch(githubUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github+json',
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  })

  if (res.status === 422) {
    return NextResponse.json(
      { message: 'A post with this slug already exists' },
      { status: 409 }
    )
  }

  if (!res.ok) {
    const errorText = await res.text()
    return NextResponse.json(
      { message: `GitHub API error: ${errorText}` },
      { status: 500 }
    )
  }

  return NextResponse.json({ fileName: `${slug}.mdx`, branch })
}
