'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DismissibleInfoBox } from 'app/components/dismissible-info-box'
import { projects } from 'app/data/projects'
import { technologies } from 'app/data/technologies'
import { TechnologyPill } from 'app/components/technology-pill'

export default function WorkPage() {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null)
  const [showAllTechnologies, setShowAllTechnologies] = useState(false)

  // Filter technologies to show only those with projects, unless showAllTechnologies is true
  const displayedTechnologies = showAllTechnologies 
    ? technologies 
    : technologies.filter(t => t.projectIds.length > 0)

  // Check if there are any technologies without projects
  const hasTechnologiesWithoutProjects = technologies.some(t => t.projectIds.length === 0)

  // Filter projects by selected technology
  const displayedProjects = selectedTechnology
    ? projects.filter(p => {
        const technology = technologies.find(t => t.name === selectedTechnology)
        return technology?.projectIds.includes(p.id)
      })
    : projects // Show all projects when no technology selected

  return (
    <section>
      {/* Existing intro box */}
      <DismissibleInfoBox>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          I plan, design, develop and ship. Products and experiements, that answer one or several questions. It's super fun to build products and improve design and code and care for growth.
        </p>
      </DismissibleInfoBox>

      {/* Technologies Section */}
      <div className="mb-8">
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {displayedTechnologies.map(technology => (
            <TechnologyPill
              key={technology.name}
              technology={technology}
              isSelected={selectedTechnology === technology.name}
              onClick={() => setSelectedTechnology(
                selectedTechnology === technology.name ? null : technology.name
              )}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasTechnologiesWithoutProjects && (
          <button
            onClick={() => setShowAllTechnologies(!showAllTechnologies)}
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {showAllTechnologies ? 'Show less technologies ↑' : 'Show more technologies ↓'}
          </button>
        )}
      </div>

      {/* Projects Section - now filtered */}
      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
        <h2 className="text-xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
          {selectedTechnology ? `Projects using ${selectedTechnology}` : 'Projects'}
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
              {project.link && (
                <div className="flex mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 underline transition-colors"
                  >
                    {project.link}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {selectedTechnology && displayedProjects.length === 0 && (
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {selectedTechnology} is part of my toolkit, used in client work and internal projects not shown here.
          </p>
        )}
      </div>
    </section>
  )
}
