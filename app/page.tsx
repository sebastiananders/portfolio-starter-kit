import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-semibold">
        In the loop: AI & UX
      </h1> */}
      <p className="mb-4">
        {`Hi, my name is Sebastian 👋🏽` }<br/>
        {`I am a design led product guy.` }
      </p>

              
      <div className="mb-8">
      <Image
      src="/images/profile.jpg"
       alt="Sebastian (and Mr. Mio) at work, in the kitchen"
       width={500}
       height={500}
       className="rounded-lg"
       priority
       />
       </div>    
       <p className="mb-2">
      {`With 20 years of experience in building digital products for start-ups, scale-ups & enterprise sized companies, I make sure we're building the right thing`}
      </p>  
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
