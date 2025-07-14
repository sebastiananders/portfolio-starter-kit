import { DismissibleInfoBox } from 'app/components/dismissible-info-box'
import Image from 'next/image'

export default function WorkPage() {
  const projects = [
    {
      title: "Noema - Chrome extension to decode LinkedIn",
      description: "Make LinkedIn suck a little less. This Chrome extension analyzes LinkedIn posts in real-time, revealing their psychological patterns and philosophical themes. It provides quick insights as you browse and deeper analysis when you want to learn more.",
      year: "2025",
      link:"https://noema-app.com",
      
      tech: ["Chrome Dev Tools", "Next.js", "Claude Code"],
      image: "/images/676shots_so.png"
    },
    {
      title: "AVA - Gen AI Content Platform",
      description: "Use case sensitiv content generation platform for AI agents. Researched market fit, developed the product strategy, built & managed the AVA design system, front-end library and design tokens.",
      year: "2024-25",
      location: "Zurich",
      tech: ["Figma","React", "TypeScript", "Langfuse", "Claude Code"],
      image: "/images/536shots_so.png"
    },
    {
      title: "Identity - Watch your data shared across the web",
      description: "Watch and manage your personal data, as it makes it way through the web. iPhone app design exploration for personal data distribution management.",
      year: "2025",
      location: "Berlin",
      tech: ["Figma", "Claude", "ChatGPT", "Cursor", "xCode"],
      image: "/images/identity.png",
      // subdescription: "To really drive user experience, every web service or app uses a set of personal user data to connect "
    },
    {
      title: "Factory Data Hub",
      description: "An industrial IoT real-time data hub, to control and manage the shopfloor IT. ",
      year: "2023-24",
      location: "Hamburg",
      tech: ["K8s", "Docker", "Figma", "Storybook", "Dovetail"],
      image: "/images/548shots_so.png"
    }
  ];

  return (
    <section>
      {/* <h1 className="mb-8 text-1xl tracking-tighter">
        Work
      </h1> */}
      <DismissibleInfoBox>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium">
          As a design led co-founder and product builder my focus is set to projects where I am able to explore, experiment, design and develop.
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