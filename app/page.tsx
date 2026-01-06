import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import AiChat from './components/ai-chat'

export default function Page() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-semibold">
        In the loop: AI & UX
      </h1> */}
      <p className="lg:text-2xl font-semibold">
        {`Sebastian Anders` }
      </p>
      <br></br>

      <p className="mb-2">
      {`I design for solutions. If you ask me to design something I start by designing stuff. Not for A/B nor countless iterations.
      With 15+ years of experience in building complex features and products for B2B|B2C companies, I make sure we're building the right thing. What I do is ready to build production design.`}
      
      </p>  
      {/* <p className="mb-4">{`Real world design` }</p> */}

      {/* <div className="mb-8">
      <Image
      src="/images/profile.jpg"
       alt="Sebastian (and Mr. Mio) at work, in the kitchen"
       width={400}
       height={400}
       className="rounded-lg"
       priority
       />
       </div>            */}
              <br></br>

      <div className="mb-8">
      <p className="mb-4">{`clients I teamed up with` }</p>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>Miele</li>
          <li>Porsche</li>
          <li>IBM</li>
          <li>Deutsche Bahn</li>
          <li>BASF</li>
          <li>Bundesministerium der Finanzen</li>
          <li>Techniker Krankenkasse</li>
        </ul>
      </div>

      <AiChat />


      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
