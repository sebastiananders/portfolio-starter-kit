import { BlogPosts } from 'app/components/posts'
import { DismissibleInfoBox } from 'app/components/dismissible-info-box'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <DismissibleInfoBox>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          Writing about my learnings and experiences. Smaller posts on design, product and AI. Often thinking out loud. Nothings special - just some mental off loading.
        </p>
      </DismissibleInfoBox>
      <BlogPosts />
    </section>
  )
}
