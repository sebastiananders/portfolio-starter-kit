import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
     <div className="mb-8 p-4 bg-neutral-10 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg">
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          Writing about my learnings and experiences. Smaller posts on design, product and AI. Often thinking out loud. Nothings special - just some mental off loading.
        </p>
      </div>
      <BlogPosts />
    </section>
  )
}
