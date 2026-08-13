export default function ProfileDetails() {
  return (
    <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-12">
      <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm">
        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Experience</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">15 years in digital products</dd>

        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Education</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">B.A. Interface Design, University of Applied Science Potsdam</dd>

        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Currently</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">Nortal</dd>

        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Clients</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">Miele, Porsche, IBM, Deutsche Bahn, BASF, Bundesministerium der Finanzen, Bizzabo</dd>

        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Tools</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">Next.js, React, Tailwind, Vercel, Claude Code, Codex, Cursor, Figma, Linear</dd>

        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Personal</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">Writer · Musician · Voluntary firefighter</dd>

        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Side projects</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">Filmed & edited documentation for UNICEF · Voluntary digital streetworker on Reddit</dd>

        <dt className="text-neutral-500 dark:text-neutral-400 font-medium">Award</dt>
        <dd className="text-neutral-900 dark:text-neutral-100">UN Habitat III CityVis (student category)</dd>
      </dl>
    </div>
  )
}
