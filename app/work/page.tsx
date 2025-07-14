import { DismissibleInfoBox } from 'app/components/dismissible-info-box'

export default function WorkPage() {
  const projects = [
    {
      title: "AVA - Gen AI Content Platform",
      description: "Use case sensitiv content generation platform for AI agents. Researched market fit, developed the product strategy, built & managed the AVA design system, front-end library and design tokens.",
      year: "2024-25",
      tech: ["Figma","React", "TypeScript", "Langfuse", "Claude Code"]
    },
    {
      title: "Design System Framework",
      description: "Comprehensive design system with component library and automated design token generation.",
      year: "2024",
      tech: ["TypeScript", "Storybook", "Figma API", "CSS-in-JS"]
    },
    {
      title: "Voice Interface Platform",
      description: "Voice-first interface design platform enabling natural language interactions for web applications.",
      year: "2023",
      tech: ["Next.js", "WebRTC", "OpenAI API", "Tailwind CSS"]
    },
    {
      title: "Accessibility Audit Tool",
      description: "Automated accessibility testing platform with real-time feedback and remediation suggestions.",
      year: "2023",
      tech: ["Node.js", "Puppeteer", "WCAG Guidelines", "React"]
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
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 md:ml-4 flex-shrink-0">
                {project.year}
              </span>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {project.description}
            </p>
            
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
          </div>
        ))}
      </div>
    </section>
  );
}