export interface Project {
  id: string
  title: string
  description: string
  year: string
  location?: string
  link?: string
  tech: string[]
  image?: string
  categories: ('Design' | 'Prototyping' | 'Engineering' | 'Experiment')[]
}

export const projects: Project[] = [
  {
    id: 'zunder',
    title: "Zunder - Learn to spot AI",
    description: "AI-generated images are everywhere now. Some are obvious, but many are getting harder to spot. Zunder helps you train your eye to catch the subtle signs that give them away.",
    year: "2026",
    link: "https://zunder.app",
    tech: ["Vercel", "Next.js", "Tailwind", "Reddit", "Claude Code"],
    image: "/images/zunder.png",
    categories: ["Engineering", "Experiment"]
  },
  {
    id: 'stumble',
    title: "Stumble - what LinkedIn don't shows",
    description: "Honest stories from real workplaces. Everyone messes up. Talking about it helps.",
    year: "2026",
    link: "https://stumble.blog",
    tech: ["Vercel", "Next.js", "Tailwind", "Prisma", "Postgres"],
    image: "/images/stumble.png",
    categories: ["Engineering", "Experiment"]
  },
  {
    id: 'firesite',
    title: "Firesite - A dead simple chat app",
    description: "Super simple, super safe: Chat with people anonymously - in open and private rooms",
    year: "2025",
    link: "https://firesite.club",
    tech: ["Vercel", "React", "Tailwind", "Railway", "Postgres", "Docker"],
    image: "/images/firesite_promo.png",
    categories: ["Design", "Prototyping", "Engineering"]
  },
  {
    id: 'noema',
    title: "Noema - Chrome extension to decode LinkedIn",
    description: "Make LinkedIn suck a little less. This Chrome extension analyzes LinkedIn posts in real-time, revealing their psychological patterns and philosophical themes. It provides quick insights as you browse and deeper analysis when you want to learn more.",
    year: "2025",
    link: "https://noema-app.com",
    tech: ["Chrome Dev Tools", "Next.js", "Claude Code"],
    image: "/images/676shots_so.png",
    categories: ["Prototyping", "Engineering"]
  },
  {
    id: 'ava',
    title: "AVA - Gen AI Content Platform",
    description: "Use case sensitiv content generation platform for AI agents. Researched market fit, developed the product strategy, built & managed the AVA design system, front-end library and design tokens.",
    year: "2024-25",
    location: "Zurich",
    tech: ["Figma", "React", "TypeScript", "Langfuse", "Claude Code"],
    image: "/images/536shots_so.png",
    categories: ["Design", "Prototyping"]
  },
  {
    id: 'identity',
    title: "Identity - Watch your data shared across the web",
    description: "Watch and manage your personal data, as it makes it way through the web. iPhone app design exploration for personal data distribution management.",
    year: "2025",
    location: "Berlin",
    tech: ["Figma", "Claude", "ChatGPT", "Cursor", "xCode"],
    image: "/images/identity.png",
    categories: ["Design", "Experiment"]
  },
  {
    id: 'factory',
    title: "Factory Data Hub",
    description: "An industrial IoT real-time data hub, to control and manage the shopfloor IT. ",
    year: "2023-24",
    location: "Hamburg",
    tech: ["K8s", "Docker", "Figma", "Storybook", "Dovetail"],
    image: "/images/548shots_so.png",
    categories: ["Design", "Prototyping"]
  }
]
