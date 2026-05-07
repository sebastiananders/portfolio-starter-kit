import { BlogPosts } from 'app/components/posts'
// import { DismissibleInfoBox } from 'app/components/dismissible-info-box'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-xl mx-4 mt-6 lg:mx-auto px-2 md:px-0">
      {/* <DismissibleInfoBox id="blog">
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          Writing about my learnings and experiences. Smaller posts on design, product and AI. Often thinking out loud. Nothings special - just some mental off loading.
        </p>
      </DismissibleInfoBox> */}
<BlogPosts />
    </section>
  )
}
