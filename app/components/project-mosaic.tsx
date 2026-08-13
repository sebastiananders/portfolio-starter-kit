'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, type Project } from 'app/data/projects'

function pickThree(): Project[] {
  return [...projects].sort(() => Math.random() - 0.5).slice(0, 3)
}

export default function ProjectMosaic() {
  const [tiles, setTiles] = useState<Project[]>([])

  useEffect(() => {
    setTiles(pickThree())
  }, [])

  const slots: (Project | null)[] = tiles.length ? tiles : [null, null, null]

  return (
    <div className="mb-12">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {slots.map((project, i) =>
          project ? (
            <Link
              key={project.id}
              href={`/work#${project.id}`}
              aria-label={`${project.title} — ${project.year}`}
              className="group relative block aspect-square overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="33vw"
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
          ) : (
            <div
              key={i}
              aria-hidden
              className="aspect-square rounded-md bg-neutral-100 dark:bg-neutral-900"
            />
          )
        )}
      </div>
      <div className="flex justify-center">
        <Link
          href="/work"
          className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
        >
          See all {projects.length} projects →
        </Link>
      </div>
    </div>
  )
}
