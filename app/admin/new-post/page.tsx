'use client'

import { useState } from 'react'

const initialState = {
  title: '',
  slug: '',
  summary: '',
  publishedAt: new Date().toISOString().slice(0, 10),
  content: '',
}

export default function NewPostPage() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(null)
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/admin/new-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Failed to create post')
      }

      setStatus(`Created ${data.fileName}`)
      setForm(initialState)
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  function updateField<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">New blog post</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Fill in the metadata and content, then a new .mdx file will be saved locally.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col space-y-2">
            <span className="text-sm font-medium">Title</span>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => updateField('title', e.target.value)}
              className="rounded-md border border-neutral-300 bg-white p-2 text-neutral-900 shadow-sm focus:border-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              placeholder="Post title"
            />
          </label>

          <label className="flex flex-col space-y-2">
            <span className="text-sm font-medium">Slug (optional)</span>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => updateField('slug', e.target.value)}
              className="rounded-md border border-neutral-300 bg-white p-2 text-neutral-900 shadow-sm focus:border-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              placeholder="my-post-slug"
            />
            <span className="text-xs text-neutral-500">
              If empty, it will be generated from the title.
            </span>
          </label>
        </div>

        <label className="flex flex-col space-y-2">
          <span className="text-sm font-medium">Summary</span>
          <input
            type="text"
            required
            value={form.summary}
            onChange={(e) => updateField('summary', e.target.value)}
            className="rounded-md border border-neutral-300 bg-white p-2 text-neutral-900 shadow-sm focus:border-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            placeholder="One-line summary for lists and meta"
          />
        </label>

        <label className="flex flex-col space-y-2 max-w-xs">
          <span className="text-sm font-medium">Published date</span>
          <input
            type="date"
            required
            value={form.publishedAt}
            onChange={(e) => updateField('publishedAt', e.target.value)}
            className="rounded-md border border-neutral-300 bg-white p-2 text-neutral-900 shadow-sm focus:border-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span className="text-sm font-medium">Content (MDX)</span>
          <textarea
            required
            rows={12}
            value={form.content}
            onChange={(e) => updateField('content', e.target.value)}
            className="rounded-md border border-neutral-300 bg-white p-3 text-neutral-900 shadow-sm focus:border-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 font-mono text-sm"
            placeholder="Write your MDX content here..."
          />
        </label>

        <div className="flex items-center space-x-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-neutral-900 px-4 py-2 text-white transition hover:bg-neutral-800 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            {isSubmitting ? 'Creating...' : 'Create post'}
          </button>
          {status && (
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {status}
            </span>
          )}
        </div>
      </form>
    </section>
  )
}
