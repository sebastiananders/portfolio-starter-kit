import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        In the loop: AI & UX
      </h1>
      <p className="mb-4">
        {`Hi, my name is Sebastian and I am a design lead for an AI start up. 
        Here I reflect on my daily work and think out loud about design and AI in general`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
