'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DismissibleInfoBox } from 'app/components/dismissible-info-box'
import { projects } from 'app/data/projects'
import { skills, skillCategories } from 'app/data/skills'
import { SkillPill } from 'app/components/skill-pill'
import { SegmentedControl } from 'app/components/segmented-control'

export default function WorkPage() {
  const [selectionMode, setSelectionMode] = useState<'categories' | 'skills'>('categories')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [showAllSkills, setShowAllSkills] = useState(false)

  const handleModeChange = (mode: 'categories' | 'skills') => {
    setSelectionMode(mode)
    setActiveCategory('all')
    setSelectedSkill(null)
    setShowAllSkills(false)
  }

  // Filter skills by category
  let filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  // Further filter to only show skills with projects, unless showAllSkills is true
  if (!showAllSkills) {
    filteredSkills = filteredSkills.filter(s => s.projectIds.length > 0)
  }

  // Calculate if there are any skills without projects in current category
  const categorySkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)
  const hasSkillsWithoutProjects = categorySkills.some(s => s.projectIds.length === 0)

  // Filter projects by selected skill or category
  const displayedProjects = selectionMode === 'skills' && selectedSkill
    ? projects.filter(p => {
        const skill = skills.find(s => s.name === selectedSkill)
        return skill?.projectIds.includes(p.id)
      })
    : selectionMode === 'categories' && activeCategory !== 'all'
      ? projects.filter(p => {
          // In categories mode, show projects that use any skill from the selected category
          const categorySkills = skills.filter(s => s.category === activeCategory)
          return categorySkills.some(skill => skill.projectIds.includes(p.id))
        })
      : projects // Show all projects when no specific selection

  return (
    <section>
      {/* Existing intro box */}
      <DismissibleInfoBox>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          I plan, design, develop and ship. Products and experiements, that answer one or several questions. It's super fun to build products and improve design and code and care for growth.
        </p>
      </DismissibleInfoBox>

      {/* Filter Section */}
      <div className="mb-8">
        {/* Selection Mode Toggle */}
        <div className="mb-6">
          <SegmentedControl
            value={selectionMode}
            onChange={handleModeChange}
            options={[
              { value: 'categories', label: 'Categories' },
              { value: 'skills', label: 'Skills' }
            ]}
          />
        </div>

        {/* Category Filters */}
        {selectionMode === 'categories' && (
          <div className="mb-4 flex flex-wrap gap-2">
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
        )}

        {/* Skills Pills - Only show in Skills mode */}
        {selectionMode === 'skills' && (
          <div className="flex flex-wrap gap-2">
            {(showAllSkills 
              ? skills 
              : skills.filter(s => s.projectIds.length > 0)
            ).map(skill => (
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
        )}

        {/* Show More/Less Button - Only show in Skills mode */}
        {selectionMode === 'skills' && skills.some(s => s.projectIds.length === 0) && (
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {showAllSkills ? 'Show less skills ↑' : 'Show more skills ↓'}
          </button>
        )}
      </div>

      {/* Projects Section - now filtered */}
      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
        <h2 className="text-xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
          {selectionMode === 'skills' && selectedSkill 
            ? `Projects using ${selectedSkill}` 
            : selectionMode === 'categories' && activeCategory !== 'all'
              ? `Projects in ${skillCategories.find(c => c.id === activeCategory)?.label}`
              : 'Projects'
          }
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
        {selectionMode === 'skills' && selectedSkill && displayedProjects.length === 0 && (
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {selectedSkill} is part of my skillset, used in client work and internal projects not shown here.
          </p>
        )}
      </div>
    </section>
  )
}
