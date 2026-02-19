import { getBlogPosts } from 'app/blog/utils'
import { BlogPostCard } from './blog-post-card'
import { extractPreview } from 'app/lib/content-utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="-mx-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => {
          const preview = extractPreview(
            post.metadata.summary,
            post.content,
            180
          )

          return (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={post.metadata.title}
              publishedAt={post.metadata.publishedAt}
              image={post.metadata.image}
              preview={preview}
            />
          )
        })}
    </div>
  )
}
