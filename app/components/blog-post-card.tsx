import Link from 'next/link'
import { formatDate } from '../lib/date-utils'

interface BlogPostCardProps {
  slug: string
  title: string
  publishedAt: string
  image?: string
  preview: string
}

export function BlogPostCard({
  slug,
  title,
  publishedAt,
  image,
  preview,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200"
    >
      <article className="p-6">
        {/* Image */}
        {image && (
          <div className="mb-4 -mx-6 -mt-6">
            <img
              src={image}
              alt={title}
              className="w-full aspect-video object-cover rounded-t-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Title */}
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 title">
          {title}
        </h2>

        {/* Date */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          {formatDate(publishedAt, false)}
        </p>

        {/* Preview */}
        <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          {preview}
        </p>
      </article>
    </Link>
  )
}
