import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'Design Engineer, based in Berlin with 15+ years of experience in product design and front-end engineering.',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-1">Sebastian Anders</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        Design & Engineering · Berlin
      </p>

      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        I do hands-on strategy and design for complex features and products for B2B and B2C companies. Prototyping the future of SaaS in the AI era and building HITL experiences for LLM interfaces.
      </p>

      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-12">
        <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm">
          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Experience</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">18 years of interface design</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Education</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">B.A. Interface Design, University of Applied Science Potsdam</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Currently</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Nortal</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Clients</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Miele, Porsche, IBM, Deutsche Bahn, BASF, Bundesministerium der Finanzen, Bizzabo</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Tools</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Figma, React, Claude Code, Vercel, Cursor, BMAD, Langfuse</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Personal</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Writer · Musician · Voluntary firefighter</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Side projects</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Filmed & edited documentation for UNICEF · Voluntary digital streetworker on Reddit</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Award</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">UN Habitat III CityVis (student category)</dd>
        </dl>
      </div>

      <Image
        src="/images/profile_image.jpg"
        alt="Sebastian Anders"
        width={800}
        height={1200}
        className="w-full h-auto"
        priority
      />
    </section>
  )
}
