import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-semibold">
        In the loop: AI & UX
      </h1> */}
      <p className="lg:text-2xl, font-bold">
        {`Hi, my name is Sebastian 👋🏽` }
      </p>
      <br/>
      <p className="mb-4">{`Lead UX architecture design & engineering` }</p>

      {/* <div className="mb-8">
      <Image
      src="/images/profile.jpg"
       alt="Sebastian (and Mr. Mio) at work, in the kitchen"
       width={400}
       height={400}
       className="rounded-lg"
       priority
       />
       </div>     */}
      <a target="_blank" href="http://irresistible-actions-338794.framer.app" rel="noopener noreferrer">
        Online Portfolio
      </a>  
      <br></br>
      <div className="mb-8">
        <p>Some companies I recently worked with</p>
        <br></br>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>Miele</li>
          <li>Porsche</li>
          <li>IBM</li>
          <li>Deutsche Bahn</li>
          <li>BASF</li>
          <li>Bundesministerium der Finanzen</li>
          <li>Züricher Kantonalbank</li>
          <li>Techniker Krankenkasse</li>
        </ul>
      </div>
      <p className="mb-2">
      {`With 15+ years of experience in building complex features and products for B2B|B2C companies, I make sure we're building the right thing`}
      </p>  
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
