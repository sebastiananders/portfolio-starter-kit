'use client'

import Image from 'next/image'
import { projects } from 'app/data/projects'

const selectedIds = ['ava', 'MechOS', 'soham', 'identity', 'factory']
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

        <div className="flex gap-5 items-center">
          {/* Figma */}
          <a href="https://figma.com/@_sebanders" target="_blank" rel="noopener noreferrer" aria-label="Figma">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
              <path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
              <path fill="#A259FF" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
              <path fill="#1ABCFE" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
              <path fill="#0ACF83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/sebastiananders" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path className="fill-neutral-900 dark:fill-neutral-100" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          {/* Vercel / v0 */}
          <a href="https://v0.app/@sebastiananders" target="_blank" rel="noopener noreferrer" aria-label="v0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path className="fill-neutral-900 dark:fill-neutral-100" d="M24 22.525H0l12-21.05 12 21.05z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/hey-sebastian/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* Substack */}
          <a href="https://substack.com/@sebastiananders" target="_blank" rel="noopener noreferrer" aria-label="Substack">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path fill="#FF6719" d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
          </a>
        </div>
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
              <div className="py-16 group">
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
                    {project.comingSoon && (
                      <span className="text-xs uppercase tracking-widest text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded-full px-3 py-1">
                        Coming soon
                      </span>
                    )}
                    {(project.caseStudyLink || project.figmaLink) && (
                      <div className="flex flex-wrap gap-5">
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
