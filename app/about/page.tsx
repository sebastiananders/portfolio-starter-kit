import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'Lead Design Engineer based in Berlin with 15+ years of experience in product design and front-end engineering.',
}

export default function AboutPage() {
  return (
    <section>
      <div className="mb-8">
        <Image
          src="/images/profile_image.jpg"
          alt="Sebastian Anders"
          width={300}
          height={300}
          className="rounded-full"
          priority
        />
      </div>

      <h1 className="text-2xl font-semibold mb-1">Sebastian Anders</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        Lead Design Engineer · Berlin
      </p>

      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        With 15+ years of experience in building complex features and products for B2B and B2C companies,
        I make sure we&apos;re building the right thing. I design for solutions — not for A/B tests or
        countless iterations. What we need is ready-to-build production design.
      </p>

      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
        <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm">
          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Experience</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">15+ years</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Education</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">B.A. Interface Design, FH Potsdam</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Currently</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Nortal</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Clients</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Miele, Porsche, IBM, Deutsche Bahn, BASF, Bundesministerium der Finanzen, Techniker Krankenkasse</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Tools</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Figma, React, Vue, Angular, Claude Code, Vercel, Supabase</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Personal</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Writer · Musician · Voluntary firefighter</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Side projects</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">Filmed & edited documentation for UNICEF · Voluntary digital streetworker on Reddit</dd>

          <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Award</dt>
          <dd className="text-neutral-900 dark:text-neutral-100">UN Habitat III CityVis (student category)</dd>
        </dl>
      </div>
    </section>
  )
}
