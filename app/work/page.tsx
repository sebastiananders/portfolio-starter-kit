'use client'

import Image from 'next/image'
import { projects } from 'app/data/projects'

const selectedIds = ['MechOS', 'ava', 'soham', 'identity', 'factory', 'zunder', 'stumble', 'firesite', 'noema', 'skytale']
const selectedProjects = selectedIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean) as typeof projects

export default function PortfolioPage() {
  return (
    <div className="max-w-4xl mx-4 mt-6 lg:mx-auto px-2 md:px-0">

      {/* ── Hero ── */}
      <section className="pt-4 pb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Product & Engineering for 0→1 and scaling
        </p>
        <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Work
        </h1>
        {/* <p className="text-xl text-neutral-500 dark:text-neutral-400 mb-6">
          Product strategy and design that guides through ambiguity for grow and scaling your mission
        </p> */}
        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mb-10 leading-relaxed">
        Product strategy & design providing clarity through ambiguity for growth and scaling of your mission. With my 15+ years of experience in building interfaces for B2B and B2C companies, I know how products land.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-700" />

      {/* ── Selected Work ── */}
      <section className="py-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Projects
        </h2>

        <div>
          {selectedProjects.map((project, index) => {
            const isEven = index % 2 === 1
            const num = String(index + 1).padStart(2, '0')
            return (
              <div key={project.id}>
                {index === 2 && (
                  <div className="py-20 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-2xl lg:text-3xl font-medium text-neutral-900 dark:text-neutral-100 leading-snug max-w-2xl">
                      I help companies turn complex, ambiguous product challenges into clear, beautiful experiences.
                    </p>
                    <p className="text-2xl lg:text-3xl font-medium text-neutral-400 dark:text-neutral-500 leading-snug max-w-2xl mt-2">
                      From early-stage 0→1 prototyping and MVP building to scaling into production ready environments — strategy, design and code, all in one cycle.
                    </p>
                  </div>
                )}
              <div id={project.id} className="py-16 group scroll-mt-8">
                <p className="text-[96px] font-bold leading-none text-neutral-100 dark:text-neutral-800 mb-2 select-none tabular-nums">
                  {num}
                </p>
                <div className={`flex flex-col md:flex-row md:gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {project.image && (
                    <div className={`md:w-[75%] flex-shrink-0 overflow-hidden rounded-lg mb-8 md:mb-0 ${isEven ? 'md:-mr-12' : 'md:-ml-12'}`}>
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        width={900}
                        height={650}
                        className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 leading-none">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mb-5">
                      {project.year}{project.location ? ` · ${project.location}` : ''}
                    </p>
                    <p className="text-neutral-600 dark:text-white mb-6 leading-snug">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {(project.link || project.caseStudyLink || project.figmaLink) && (
                      <div className="flex flex-wrap gap-5">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
                          >
                            Visit →
                          </a>
                        )}
                        {project.caseStudyLink && (
                          <a
                            href={project.caseStudyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
                          >
                            Case Study →
                          </a>
                        )}
                        {project.figmaLink && (
                          <a
                            href={project.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
                          >
                            Figma →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="py-20 pb-28 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          From the blog
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-none mb-6 max-w-xl">
          Thinking out loud on AI, design & building products.
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 mb-10 max-w-lg leading-relaxed">
          I write about AI-native design, prototyping, the tools I use, and what it actually feels like to ship products in 2026.
        </p>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-full px-6 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          Read the blog <span aria-hidden>→</span>
        </a>
      </section>

    </div>
  )
}
