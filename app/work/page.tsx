'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DismissibleInfoBox } from 'app/components/dismissible-info-box'
import { projects } from 'app/data/projects'

const categories = ['All', 'Design', 'Prototyping', 'Engineering', 'Experiment'] as const
type Category = typeof categories[number]

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')

  // Filter projects by selected category
  const displayedProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(selectedCategory as any))

  return (
    <section>
      {/* Existing intro box */}
      <DismissibleInfoBox>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          I plan, design, develop and ship. Products and experiements, that answer one or several questions. It's super fun to build products and improve design and code and care for growth.
        </p>
      </DismissibleInfoBox>

      {/* Category Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm rounded transition-all ${
                selectedCategory === category
                  ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Section - now filtered */}
      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
        <h2 className="text-xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
          {selectedCategory === 'All' ? 'Projects' : `${selectedCategory} Projects`}
        </h2>

        <div className="space-y-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="border-b border-neutral-200 dark:border-neutral-700 pb-8 last:border-b-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h2>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 md:ml-4 flex-shrink-0 flex flex-col md:text-right">
                  <span>{project.year}</span>
                  {project.location && <span>{project.location}</span>}
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {project.description}
              </p>
              {project.image && (
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.link || project.caseStudyLink || project.figmaLink) && (
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 underline transition-colors"
                    >
                      {project.link}
                    </a>
                  )}
                  {project.caseStudyLink && (
                    <a
                      href={project.caseStudyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 underline transition-colors"
                    >
                      Case Study
                    </a>
                  )}
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 underline transition-colors"
                    >
                      Figma Link
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {selectedCategory !== 'All' && displayedProjects.length === 0 && (
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            No projects found in the {selectedCategory} category.
          </p>
        )}
      </div>
    </section>
  )
}
