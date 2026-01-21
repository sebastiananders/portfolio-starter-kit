'use client'

interface SkillPillProps {
  skill: {
    name: string
    projectIds: string[]
  }
  isSelected: boolean
  onClick: () => void
}

export function SkillPill({ skill, isSelected, onClick }: SkillPillProps) {
  const projectCount = skill.projectIds.length

  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 text-xs rounded transition-all cursor-pointer ${
        isSelected
          ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black border-2 border-neutral-900 dark:border-neutral-100'
          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 border-2 border-transparent'
      }`}
      aria-label={`${skill.name}${projectCount > 0 ? ` - used in ${projectCount} project${projectCount > 1 ? 's' : ''}` : ''}`}
    >
      {skill.name}
      {projectCount > 0 && (
        <sup className="ml-0.5 text-[9px] opacity-70">
          {projectCount}
        </sup>
      )}
    </button>
  )
}
