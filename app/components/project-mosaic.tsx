'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from 'app/data/projects'

export default function ProjectMosaic() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project, i) => {
          const visibilityClass = expanded
            ? 'block'
            : i < 4
              ? 'block'
              : i < 6
                ? 'hidden lg:block'
                : 'hidden'

          return (
            <Link
              key={project.id}
              href={`/work#${project.id}`}
              aria-label={`${project.title} — ${project.year}`}
              className={`group relative ${visibilityClass} aspect-square overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500`}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                />
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                <div className="p-3">
                  <p className="text-sm font-semibold text-white leading-tight">{project.title}</p>
                  <p className="text-xs text-neutral-300 mt-0.5">{project.year}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      {!expanded && (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
          >
            Show all {projects.length} projects →
          </button>
        </div>
      )}
    </div>
  )
}
