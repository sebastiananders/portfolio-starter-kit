import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Experiments',
  description: 'Prototypes, sketches, and side quests.',
}

const experiments = [
  {
    slug: 'limehome',
    title: 'Limehome',
    description:
      'An in-room TV prototype for unmanned serviced apartments: no menu, content indexed by stay phase, and a screen that behaves like a lamp before it behaves like a display.',
    year: '2026',
    location: 'Berlin',
    image: '/images/limehome/limehome_intro.png',
    tech: ['React', 'Vite', 'Tailwind', 'Claude Code'],
  },
  {
    slug: 'greek',
    title: 'Greek',
    description:
      'Plan the shot cheaply in Blender with Claude via the Higgsfield Bridge, then hand the AI video model a previz it has to follow — instead of burning tokens discovering the composition.',
    year: '2026',
    location: 'Berlin',
    image: '/images/greek/hero.png',
    tech: ['Blender', 'Higgsfield Bridge', 'Claude', 'AI Video Gen'],
  },
]

export default function ExperimentsPage() {
  return (
    <div className="max-w-4xl mx-4 mt-6 lg:mx-auto px-2 md:px-0">
      <section className="pt-4 pb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Prototypes, sketches, and side quests
        </p>
        <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Experiments
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed">
          This section is my public playground. A tool, a workflow, a UI thesis.
          Not client work; not always finished. Most is work in progress but I
          learn a lot from these experiments.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-700" />

      <section className="py-16">
        <div>
          {experiments.map((experiment, index) => {
            const isEven = index % 2 === 1
            const num = String(index + 1).padStart(2, '0')
            return (
              <div key={experiment.slug} id={experiment.slug} className="py-16 group scroll-mt-8">
                <p className="text-[96px] font-bold leading-none text-neutral-100 dark:text-neutral-800 mb-2 select-none tabular-nums">
                  {num}
                </p>
                <div className={`flex flex-col md:flex-row md:gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-[75%] flex-shrink-0 overflow-hidden rounded-lg mb-8 md:mb-0 ${isEven ? 'md:-mr-12' : 'md:-ml-12'}`}>
                    <Image
                      src={experiment.image}
                      alt={`${experiment.title} preview`}
                      width={900}
                      height={650}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 leading-none">
                      {experiment.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mb-5">
                      {experiment.year}
                      {experiment.location ? ` · ${experiment.location}` : ''}
                    </p>
                    <p className="text-neutral-600 dark:text-white mb-6 leading-snug">
                      {experiment.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {experiment.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div>
                      <Link
                        href={`/experiments/${experiment.slug}`}
                        className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
