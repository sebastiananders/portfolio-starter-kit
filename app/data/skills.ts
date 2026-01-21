export interface SkillCategory {
  id: string
  label: string
  description: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'design' | 'ai' | 'devops' | 'database' | 'collaboration'
  projectIds: string[]
}

export const skillCategories: SkillCategory[] = [
  { id: 'all', label: 'All', description: 'All skills' },
  { id: 'frontend', label: 'Frontend', description: 'UI frameworks and libraries' },
  { id: 'backend', label: 'Backend', description: 'Server-side technologies' },
  { id: 'design', label: 'Design', description: 'Design tools and methodologies' },
  { id: 'ai', label: 'AI Tools', description: 'AI and automation' },
  { id: 'devops', label: 'DevOps', description: 'Infrastructure and deployment' },
  { id: 'database', label: 'Databases', description: 'Data storage solutions' },
  { id: 'collaboration', label: 'Collaboration', description: 'Project management and tools' },
]

export const skills: Skill[] = [
  // Frontend skills
  { name: 'Next.js', category: 'frontend', projectIds: ['zunder', 'stumble', 'noema', 'ava'] },
  { name: 'React', category: 'frontend', projectIds: ['firesite', 'ava', 'zunder', 'stumble'] },
  { name: 'TypeScript', category: 'frontend', projectIds: ['ava'] },
  { name: 'Tailwind', category: 'frontend', projectIds: ['zunder', 'stumble', 'firesite'] },
  { name: 'Vue', category: 'frontend', projectIds: [] },
  { name: 'Angular', category: 'frontend', projectIds: [] },
  { name: 'HTML', category: 'frontend', projectIds: [] },
  { name: 'CSS', category: 'frontend', projectIds: [] },
  { name: 'JavaScript', category: 'frontend', projectIds: [] },
  { name: 'MDX', category: 'frontend', projectIds: [] },
  { name: 'PostCSS', category: 'frontend', projectIds: [] },
  { name: 'React DOM', category: 'frontend', projectIds: [] },

  // Backend & APIs
  { name: 'Node.js', category: 'backend', projectIds: [] },
  { name: 'Ruby on Rails', category: 'backend', projectIds: [] },
  { name: 'REST APIs', category: 'backend', projectIds: [] },
  { name: 'GraphQL', category: 'backend', projectIds: [] },
  { name: 'Anthropic AI SDK', category: 'backend', projectIds: [] },
  { name: 'Reddit API', category: 'backend', projectIds: ['zunder'] },
  { name: 'GitHub API', category: 'backend', projectIds: [] },

  // Design & UX skills
  { name: 'Figma', category: 'design', projectIds: ['ava', 'identity', 'factory'] },
  { name: 'Storybook', category: 'design', projectIds: ['factory'] },
  { name: 'Dovetail', category: 'design', projectIds: ['factory'] },
  { name: 'Miro', category: 'design', projectIds: [] },
  { name: 'Adobe Suite', category: 'design', projectIds: [] },
  { name: 'Design Systems', category: 'design', projectIds: ['ava', 'factory'] },
  { name: 'Design Tokens', category: 'design', projectIds: ['ava'] },
  { name: 'Prototyping', category: 'design', projectIds: [] },
  { name: 'User Research', category: 'design', projectIds: [] },
  { name: 'DesignOps', category: 'design', projectIds: [] },
  { name: 'Lean UX', category: 'design', projectIds: [] },

  // AI & Automation skills
  { name: 'Claude Code', category: 'ai', projectIds: ['zunder', 'noema', 'ava'] },
  { name: 'Claude API', category: 'ai', projectIds: ['identity'] },
  { name: 'ChatGPT', category: 'ai', projectIds: ['identity'] },
  { name: 'Cursor IDE', category: 'ai', projectIds: ['identity'] },
  { name: 'V0.dev', category: 'ai', projectIds: [] },
  { name: 'Replit', category: 'ai', projectIds: [] },
  { name: 'Langfuse', category: 'ai', projectIds: ['ava'] },
  { name: 'Prompt Engineering', category: 'ai', projectIds: [] },
  { name: 'AI Integration', category: 'ai', projectIds: [] },

  // DevOps & Infrastructure skills
  { name: 'Vercel', category: 'devops', projectIds: ['zunder', 'stumble', 'firesite'] },
  { name: 'Railway', category: 'devops', projectIds: ['firesite'] },
  { name: 'Docker', category: 'devops', projectIds: ['firesite', 'factory'] },
  { name: 'Kubernetes', category: 'devops', projectIds: ['factory'] },
  { name: 'K8s', category: 'devops', projectIds: ['factory'] },
  { name: 'AWS', category: 'devops', projectIds: [] },
  { name: 'Netlify', category: 'devops', projectIds: [] },
  { name: 'Firebase', category: 'devops', projectIds: [] },
  { name: 'Supabase', category: 'devops', projectIds: [] },
  { name: 'Git', category: 'devops', projectIds: [] },
  { name: 'GitHub', category: 'devops', projectIds: [] },
  { name: 'CI/CD', category: 'devops', projectIds: [] },

  // Database skills
  { name: 'Postgres', category: 'database', projectIds: ['stumble', 'firesite'] },
  { name: 'Prisma', category: 'database', projectIds: ['stumble'] },
  { name: 'Firebase DB', category: 'database', projectIds: [] },
  { name: 'Supabase DB', category: 'database', projectIds: [] },
  { name: 'SQL', category: 'database', projectIds: [] },

  // Collaboration & Project Management
  { name: 'Linear', category: 'collaboration', projectIds: [] },
  { name: 'Jira', category: 'collaboration', projectIds: [] },
  { name: 'Notion', category: 'collaboration', projectIds: [] },
  { name: 'Slack', category: 'collaboration', projectIds: [] },
  { name: 'Agile/Scrum', category: 'collaboration', projectIds: [] },
  { name: 'Design Sprints', category: 'collaboration', projectIds: [] },

  // Specialized skills (mixed into relevant categories above, but adding some more here)
  { name: 'Chrome Extensions', category: 'frontend', projectIds: ['noema'] },
  { name: 'xCode', category: 'devops', projectIds: ['identity'] },
  { name: 'IoT', category: 'backend', projectIds: ['factory'] },
  { name: 'Real-time Data', category: 'backend', projectIds: ['factory'] },
]
