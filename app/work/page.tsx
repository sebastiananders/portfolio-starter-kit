import { DismissibleInfoBox } from 'app/components/dismissible-info-box'
import Image from 'next/image'
import { projects } from 'app/data/projects'

export default function WorkPage() {

  return (
    <section>
      {/* <h1 className="mb-8 text-1xl tracking-tighter">
        Work
      </h1> */}
      <DismissibleInfoBox>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          I plan, design, develop and ship. Products and experiements, that answer one or several questions. It's super fun to build products and improve design and code and care for growth.
        </p>
      </DismissibleInfoBox>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
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
            {/* <p className="text-neutral-600 dark:text-neutral-300 mb-2">
              {project.subdescription}
            </p> */}
            
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
    </section>
  );
}