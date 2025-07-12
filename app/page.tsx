import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        In the loop: AI & UX
      </h1>
      <p className="mb-4">
        {`Hi, my name is Sebastian. I work at the intersection of AI and Interfacedesign. 
        Here I reflect on my daily work and think out loud about design and AI in general`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
