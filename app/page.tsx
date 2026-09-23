import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import ProfileDetails from 'app/components/profile-details'
import ThemeVideo from 'app/components/theme-video'

export default function Page() {
  return (
    <section className="max-w-xl mx-4 mt-6 lg:mx-auto px-2 md:px-0">
      {/* <h1 className="mb-8 text-2xl font-semibold">
        In the loop: AI & UX
      </h1> */}
      <p className="lg:text-2xl font-semibold">
        {`Sebastian Anders` }
      </p>
      <p className="lg:text-1xl text-neutral-600 dark:text-neutral-400">
        {`Product Design Engineer` }
      </p>
      <br></br>
      <p className="mb-6">
      {`Design & engineering, closing gaps. User flow design, hands-on prototyping in code to navigate the team through ambiguity.
`}</p>
      <ThemeVideo />
      <p className="mb-6">
      {`Product designer with strong technical depth and visual craft. I understand how products get built, and I bring clear judgment and a point of view. AI-savvy in how I work, with an emphasis on speed and pragmatism. Most importantly: I'm a curious builder who loves this era.`}</p>
      {/* <ProfileDetails /> */}
      {/* <p className="mb-3">
      {`The internet is an ever changing space. AOL, IRC, Facebook, Web3, Metaverse, AI Agents.. yadda yadda. Change is constant. In my 15+ years of design experience, I know how to navigate product decisions and create compelling user experiences.
`}</p>   */}
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

      {/* <div className="mb-8">
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
      </div> */}

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
