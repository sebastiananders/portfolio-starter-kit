'use client'

import { useState } from 'react'
import { DismissibleInfoBox } from 'app/components/dismissible-info-box'
import { skills, skillCategories } from 'app/data/skills'
import { projects } from 'app/data/projects'
import { SkillPill } from 'app/components/skill-pill'
import Image from 'next/image'

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  // Filter skills by category
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  // Get projects for selected skill
  const selectedProjects = selectedSkill
    ? projects.filter(p => {
        const skill = skills.find(s => s.name === selectedSkill)
        return skill?.projectIds.includes(p.id)
      })
    : []

  return (
    <section>
      <DismissibleInfoBox>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          15+ years bridging design and development. From design thinking to shipping production code, I work across the full stack. These are the technologies and methodologies I use to turn ideas into real products.
        </p>
      </DismissibleInfoBox>

      {/* Category Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {skillCategories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id)
              setSelectedSkill(null)
            }}
            className={`px-3 py-1.5 text-sm rounded transition-all ${
              activeCategory === category.id
                ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
            aria-label={`Filter by ${category.label}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filteredSkills.map(skill => (
          <SkillPill
            key={skill.name}
            skill={skill}
            isSelected={selectedSkill === skill.name}
            onClick={() => setSelectedSkill(
              selectedSkill === skill.name ? null : skill.name
            )}
          />
        ))}
      </div>

      {/* Projects Section */}
      {selectedSkill && selectedProjects.length > 0 && (
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <h2 className="text-xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
            Projects using {selectedSkill}
          </h2>
          <div className="space-y-8">
            {selectedProjects.map(project => (
              <div key={project.id} className="border-b border-neutral-200 dark:border-neutral-700 pb-6 last:border-b-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 md:ml-4 flex-shrink-0">
                    <span>{project.year}</span>
                    {project.location && <span className="ml-2">{project.location}</span>}
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-3">
                  {project.description}
                </p>
                {project.image && (
                  <div className="mb-3">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-3">
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 underline transition-colors"
                  >
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state for skills with no projects */}
      {selectedSkill && selectedProjects.length === 0 && (
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {selectedSkill} is part of my skillset, used in client work and internal projects.
          </p>
        </div>
      )}
    </section>
  )
}
