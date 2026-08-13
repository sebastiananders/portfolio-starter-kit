import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import ProfileDetails from 'app/components/profile-details'
import ProjectMosaic from 'app/components/project-mosaic'

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
        {`Design-led Product Lead · Berlin` }
      </p>
      <br></br>
      <p className="mb-6">
      {`15 years of designing and leading product direction. From opportunity to release — discovery, roadmap, prototyping and alignment with executives and engineering. Design-led and hands-on with code.
`}</p>
      <ProjectMosaic />
      <p className="mb-6">
      {`I cut scope by prototyping the ambiguous thing in a weekend instead of arguing about it for three sprints, I write the spec engineers actually build from, I close the design–engineering gap that costs real money. I am a product person who happens to have a design background.`}</p>
      <ProfileDetails />
      <div className="flex gap-4 items-center">
        {/* Instagram */}
        <a href="https://www.instagram.com/_sebastiananders/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <defs>
              <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%">
                <stop offset="0%" stopColor="#feda75"/>
                <stop offset="20%" stopColor="#fa7e1e"/>
                <stop offset="45%" stopColor="#d62976"/>
                <stop offset="70%" stopColor="#962fbf"/>
                <stop offset="100%" stopColor="#4f5bd5"/>
              </radialGradient>
            </defs>
            <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/hey-sebastian/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* Substack */}
        <a href="https://substack.com/@sebastiananders" target="_blank" rel="noopener noreferrer" aria-label="Substack">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="#FF6719" d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
        </a>

        {/* Figma */}
        <a href="https://figma.com/@_sebanders" target="_blank" rel="noopener noreferrer" aria-label="Figma">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
            <path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
            <path fill="#A259FF" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
            <path fill="#1ABCFE" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
            <path fill="#0ACF83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a href="https://github.com/sebastiananders" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path className="fill-neutral-900 dark:fill-neutral-100" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>

        {/* Vercel / v0 */}
        <a href="https://v0.app/@sebastiananders" target="_blank" rel="noopener noreferrer" aria-label="v0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path className="fill-neutral-900 dark:fill-neutral-100" d="M24 22.525H0l12-21.05 12 21.05z"/>
          </svg>
        </a>
      </div>
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
