# Agent Context: Portfolio Project

## Project Overview

**Type:** Personal Portfolio & Blog Website
**Owner:** Sebastian Anders - UX Designer with 15+ years experience
**Purpose:** Showcase professional work, host blog posts, and provide AI-powered chat for visitors to learn about experience

## Technology Stack

### Core Framework
- **Next.js 14.1.0** - App Router architecture
- **React 18.2.0** - UI library
- **TypeScript 5.3.3** - Type safety

### Styling
- **Tailwind CSS 4.0.0-alpha.13** - Utility-first CSS
- **PostCSS** - CSS processing
- **Geist Font** - Vercel's modern typeface (Sans + Mono)
- **Dark Mode:** System-level detection with `:dark` prefix

### Content & Data
- **Next-MDX-Remote 4.4.1** - Blog posts in MDX format
- **Markdown** - Profile data storage (`app/data/profile.md`)
- **File-system based** - Blog posts stored in `/app/blog/posts/`

### AI Integration
- **Anthropic Claude API** - Claude 3.5 Sonnet (claude-3-5-sonnet-20241022)
- **@anthropic-ai/sdk 0.71.2** - Official SDK
- **Purpose:** Interactive chat about professional experience

### Analytics & Performance
- **@vercel/analytics** - Usage tracking
- **@vercel/speed-insights** - Performance monitoring

### Package Manager
- **pnpm** - NOT npm! Always use `pnpm install`, `pnpm add`, etc.
- **Lockfile:** `pnpm-lock.yaml` (critical for Vercel builds)

## Project Architecture

### Directory Structure
```
portfolio-starter-kit/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (nav, footer, analytics)
│   ├── page.tsx                 # Homepage (bio, clients, AI chat)
│   ├── global.css               # Tailwind + custom styles
│   │
│   ├── blog/                    # Blog section
│   │   ├── page.tsx            # Blog listing
│   │   ├── [slug]/page.tsx     # Individual blog post
│   │   ├── posts/              # MDX blog post files
│   │   └── utils.ts            # Blog utilities (getBlogPosts, etc.)
│   │
│   ├── work/                    # Portfolio/projects page
│   │   └── page.tsx
│   │
│   ├── admin/                   # Admin tools
│   │   └── new-post/page.tsx   # Blog post creation form
│   │
│   ├── api/                     # API routes
│   │   ├── chat/
│   │   │   └── route.ts        # Claude AI chat endpoint
│   │   └── admin/
│   │       ├── new-post/route.ts      # Local post creation
│   │       └── github-post/route.ts   # GitHub-based post creation
│   │
│   ├── components/              # Reusable components
│   │   ├── nav.tsx             # Navigation (client component)
│   │   ├── footer.tsx          # Footer with links
│   │   ├── posts.tsx           # Blog posts list
│   │   ├── mdx.tsx             # MDX component configuration
│   │   ├── ai-chat.tsx         # AI chat interface (client)
│   │   ├── chat-message.tsx    # Message bubbles
│   │   ├── dismissible-info-box.tsx
│   │   └── skill-pill.tsx      # Interactive skill pill (client)
│   │
│   ├── lib/                     # Utilities
│   │   └── chat-context.ts     # AI context loading
│   │
│   ├── data/                    # Content data
│   │   ├── profile.md          # Professional profile for AI
│   │   ├── projects.ts         # Project data (shared)
│   │   └── skills.ts           # Skills data with project mappings
│   │
│   ├── og/                      # Open Graph image generation
│   ├── rss/                     # RSS feed
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # Sitemap generation
│   └── not-found.tsx           # 404 page
│
├── public/                      # Static assets
│   └── images/                 # Images and company logos
│
├── .env.local                   # Environment variables (NOT in git)
├── pnpm-lock.yaml              # pnpm lockfile (IMPORTANT for Vercel)
└── agent.md                    # This file
```

## Key Design Patterns & Conventions

### Component Architecture
1. **Server Components by Default** - Only use `'use client'` when necessary
2. **Client Components Need Directive** - Must start with `'use client'`
3. **Props Typing** - Always use TypeScript interfaces for props
4. **No Component Library** - Custom components using Tailwind

**Example Client Component:**
```typescript
'use client'

import { useState } from 'react'

type ComponentProps = {
  title: string
  content: string
}

export default function Component({ title, content }: ComponentProps) {
  const [state, setState] = useState('')
  // ...
}
```

### Styling Conventions

**Color Palette:**
- Neutral scale: `neutral-{50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950}`
- Light mode: `neutral-900` (text), `white`/`neutral-50` (bg), `neutral-300` (borders)
- Dark mode: `neutral-100` (text), `black`/`neutral-950` (bg), `neutral-700` (borders)
- Selection: `#47a3f3` (blue accent)

**Spacing:**
- Vertical: `space-y-{n}` for consistent gaps
- Horizontal: `space-x-{n}` for inline elements
- Containers: `max-w-xl` for main content width
- Padding: `p-{n}` or `px-{n} py-{n}`

**Typography:**
- Headings: `font-semibold tracking-tight`
- Body: Default font weight
- Code: `font-mono`
- Sizes: `text-sm`, `text-base`, `text-lg`, `text-2xl`

**Interactive Elements:**
```typescript
// Buttons
className="rounded-md bg-neutral-900 dark:bg-white px-4 py-2
           text-white dark:text-black hover:bg-neutral-800
           dark:hover:bg-neutral-200 transition disabled:opacity-60"

// Inputs
className="rounded-md border border-neutral-300 dark:border-neutral-700
           bg-white dark:bg-neutral-900 p-2 focus:border-neutral-500
           focus:outline-none"

// Cards/Containers
className="rounded-lg border border-neutral-200 dark:border-neutral-800
           bg-white dark:bg-black p-4"
```

**Responsive Design:**
- Mobile-first approach
- Use `md:` for tablet (768px+)
- Use `lg:` for desktop (1024px+)

### State Management
- **React useState** - For local component state
- **No global state library** - Props drilling or lifting state
- **usePathname()** - For route-based logic (from `next/navigation`)
- **useRef()** - For DOM references (e.g., auto-scroll)

### File Operations
- **Reading files:** Use `fs.readFileSync()` in server components/API routes
- **Blog posts:** Parsed from MDX files using `next-mdx-remote`
- **Async operations:** Use `try/catch` with user-friendly error messages

## Existing Features

### 1. Homepage (`app/page.tsx`)
- **Content:** Sebastian's bio, design philosophy, client list
- **Components:** `<AiChat />` interactive chat section
- **Type:** Server component (except embedded client components)

### 2. AI Chat Feature (`app/components/ai-chat.tsx`)
**Purpose:** Interactive chat where visitors ask about Sebastian's professional experience

**Key Features:**
- Suggested questions (4 clickable prompts)
- Real-time conversation with Claude API
- Loading states (animated dots)
- Error handling with dismissible messages
- Auto-scroll to latest message
- Dark mode support

**Context System:**
- Profile data loaded from `app/data/profile.md`
- Falls back to basic context if file missing
- Context loaded in `app/lib/chat-context.ts`

**Suggested Questions:**
1. "What's your approach to UX design?"
2. "Tell me about your experience with enterprise clients"
3. "What projects have you worked on?"
4. "What technical skills do you bring to a team?"

**State:**
- `messages[]` - Conversation history
- `input` - Current input value
- `isLoading` - API call in progress
- `error` - Error message (if any)
- `showSuggestions` - Show/hide suggested questions

### 3. Blog System
**Structure:**
- Blog posts as MDX files in `app/blog/posts/`
- YAML frontmatter: `title`, `publishedAt`, `summary`
- Listing page at `/blog`
- Individual posts at `/blog/[slug]`

**Utilities (`app/blog/utils.ts`):**
- `getBlogPosts()` - Reads all posts from filesystem
- `formatDate()` - Formats dates for display

**Admin Interface:**
- Form at `/admin/new-post` for creating posts
- Two endpoints: local file creation or GitHub commit
- Environment variables for GitHub integration

### 4. Navigation (`app/components/nav.tsx`)
- Client component
- Active link detection with `usePathname()`
- Hover states and transitions
- Dark mode support

### 5. Work/Portfolio Page (`app/work/page.tsx`)
**Location:** `/work`
**Type:** Client component (uses state for interactivity)

**Key Features:**
- **Interactive Skill Matrix** - 70+ skills organized by category
- **Category Filtering** - Filter skills by: All, Frontend, Backend, Design, AI Tools, DevOps, Databases, Collaboration
- **Progressive Disclosure** - "Show more" toggle to hide/reveal skills without portfolio projects
- **Project Filtering** - Click any skill to filter projects that use it
- **Evidence-Based Display** - Skills show project count indicators (e.g., Next.js⁴)
- **Project Showcases** - 7 projects with images, descriptions, tech stacks, and links

**Data Structure:**
- Projects: Stored in `app/data/projects.ts` (shared data)
- Skills: Stored in `app/data/skills.ts` with project ID mappings
- Each skill has: name, category, projectIds array

**State Management:**
- `activeCategory` - Selected category filter ('all', 'frontend', etc.)
- `selectedSkill` - Currently selected skill for project filtering
- `showAllSkills` - Toggle for showing/hiding skills without projects

**User Flow:**
1. Page loads with skills that have portfolio projects visible
2. Click category button to filter skills by type
3. Click skill pill to filter projects using that skill
4. Click "Show more skills ↓" to reveal all skills (including those without projects)
5. Click "Show less skills ↑" to return to evidence-based view

## API Routes

### POST `/api/chat`
**Purpose:** Handle AI chat messages

**Request:**
```typescript
{
  messages: Array<{
    role: 'user' | 'assistant'
    content: string
  }>
}
```

**Response:**
```typescript
{ message: string }  // AI response
// OR
{ error: string }    // Error message
```

**Environment Variables:**
- `ANTHROPIC_API_KEY` - Required for Claude API

**Implementation Details:**
- Loads profile context from `profile.md`
- Sends full conversation history to Claude
- Max tokens: 1024
- Error handling for missing API key, network issues

### POST `/api/admin/new-post`
**Purpose:** Create blog post locally

**Request:**
```typescript
{
  title: string
  slug?: string
  summary: string
  publishedAt: string
  content: string
}
```

### POST `/api/admin/github-post`
**Purpose:** Create blog post via GitHub API

**Additional Fields:**
```typescript
{
  author?: string
  image?: string
}
```

**Environment Variables:**
- `GH_REPO_OWNER`
- `GH_REPO_NAME`
- `GH_TOKEN`
- `GH_REPO_BRANCH` (optional)
- `ADMIN_POST_SECRET` (optional, for authentication)

## Important Files

### `app/data/profile.md`
**Purpose:** Rich professional context for AI chat

**Content Structure:**
- Overview (name, title, experience)
- Professional philosophy
- Work experience (roles, companies, dates)
- Key projects & case studies
- Technical skills & tools
- Notable clients
- Blog highlights
- Additional info (awards, speaking, etc.)

**Usage:** Read by `chat-context.ts` and included in Claude's system prompt

**Status:** Template exists, needs to be filled with actual content

### `app/data/projects.ts`
**Purpose:** Shared project data for work page and skill matrix

**Interface:**
```typescript
export interface Project {
  id: string          // Unique identifier (e.g., 'zunder', 'stumble')
  title: string
  description: string
  year: string
  location?: string
  link?: string
  tech: string[]     // Technologies used
  image?: string
}
```

**Contains:** 7 portfolio projects with full details

### `app/data/skills.ts`
**Purpose:** Skills data with project mappings for skill matrix

**Interfaces:**
```typescript
export interface SkillCategory {
  id: string
  label: string
  description: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'design' | 'ai' | 'devops' | 'database' | 'collaboration'
  projectIds: string[]  // References to project IDs
}
```

**Contains:**
- 8 skill categories (All, Frontend, Backend, Design, AI Tools, DevOps, Databases, Collaboration)
- 70+ skills with project mappings
- Skills without projects have empty projectIds array

**Usage:** Imported by work page for skill matrix functionality

### `app/components/skill-pill.tsx`
**Purpose:** Reusable interactive skill button component

**Type:** Client component

**Features:**
- Displays skill name with optional project count superscript
- Click handler for selection
- Active/inactive states with visual feedback
- Hover states
- Dark mode support
- ARIA labels for accessibility

**Props:**
```typescript
{
  skill: { name: string; projectIds: string[] }
  isSelected: boolean
  onClick: () => void
}
```

### `app/global.css`
**Contains:**
- Tailwind imports
- MDX prose styling
- Code syntax highlighting colors (light/dark)
- Anchor link styles for blog posts
- Input styling resets

### `app/layout.tsx`
**Root Layout Contains:**
- HTML structure
- Geist font loading
- Navigation component
- Main content wrapper (`max-w-xl`)
- Footer component
- Analytics components

## Environment Variables

**Required:**
```bash
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
```

**Optional (for GitHub blog posts):**
```bash
GH_REPO_OWNER=username
GH_REPO_NAME=repo-name
GH_TOKEN=github_pat_xxxxx
GH_REPO_BRANCH=main
ADMIN_POST_SECRET=secret
```

**Security:**
- `.env.local` is in `.gitignore`
- Never commit API keys
- Keys are only accessible server-side

## Development Workflow

### Package Management
```bash
# Install dependencies
pnpm install

# Add new package
pnpm add package-name

# Add dev dependency
pnpm add -D package-name

# Remove package
pnpm remove package-name
```

### Development Server
```bash
pnpm dev
# Runs at http://localhost:3000
```

### Building
```bash
pnpm build      # Production build
pnpm start      # Run production build
```

### Linting
```bash
pnpm lint
```

## Git Workflow

### Commit Messages
- Use descriptive, clear messages
- Include footer with Claude Code attribution:
```
Your commit message here

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

### Files to Never Commit
- `.env.local` and all `.env*.local` files
- `node_modules/`
- `.next/`
- `*.log`

## Common Tasks & Patterns

### Adding a New Page
1. Create `app/[page-name]/page.tsx`
2. Add to navigation in `app/components/nav.tsx`
3. Use existing styling patterns
4. Server component by default

### Adding a New API Route
1. Create `app/api/[route-name]/route.ts`
2. Export `GET`, `POST`, `PUT`, `DELETE` functions
3. Use `NextResponse.json()` for responses
4. Validate input and handle errors

### Adding a New Component
1. Create in `app/components/[name].tsx`
2. Use TypeScript for props
3. Add `'use client'` only if needed (state, events, hooks)
4. Follow Tailwind styling conventions

### Updating AI Chat Context
1. Edit `app/data/profile.md`
2. No code changes needed
3. Restart dev server to reload

### Creating a Blog Post
**Via UI:**
1. Go to `/admin/new-post`
2. Fill in form
3. Choose destination (local or GitHub)

**Manually:**
1. Create MDX file in `app/blog/posts/`
2. Add YAML frontmatter
3. Write content

### Adding a New Project to Work Page
1. Add project to `app/data/projects.ts`
2. Include unique `id` field (used for skill mappings)
3. Update `app/data/skills.ts` to reference new project ID in relevant skills' `projectIds` arrays
4. Project will automatically appear on work page

### Adding a New Skill
1. Add skill to `app/data/skills.ts`
2. Assign appropriate category
3. Map to project IDs in `projectIds` array (empty array if no portfolio examples)
4. Skill will appear in matrix, hidden by default if no projects

## Design Philosophy

### Sebastian's Approach
- **No BS:** Direct, pragmatic solutions
- **Production-ready:** Skip personas/wireframes, design for implementation
- **Experience-driven:** 15+ years building B2B/B2C products
- **Efficiency:** Avoid endless iterations

### Codebase Philosophy
- **Simplicity:** No over-engineering
- **Consistency:** Follow existing patterns
- **Performance:** Server components, minimal client JS
- **Maintainability:** TypeScript, clear structure
- **Modern:** Latest Next.js, React patterns

## Critical Considerations

### Performance
- Use server components by default
- Minimize client-side JavaScript
- Optimize images with Next.js `<Image>`
- Lazy load when appropriate

### Accessibility
- Use semantic HTML
- Include `aria-label` for icon buttons
- Ensure keyboard navigation works
- Maintain color contrast ratios

### SEO
- Metadata in each page
- `robots.ts` and `sitemap.ts` configured
- Open Graph images generated
- RSS feed available

### Security
- API keys server-side only
- Validate all API inputs
- Rate limiting considerations for public APIs
- Never expose sensitive data client-side

### Mobile Responsiveness
- Mobile-first approach
- Test on small screens
- Use responsive Tailwind classes
- Touch-friendly targets (min 44x44px)

## Troubleshooting

### Common Issues

**1. Vercel Build Fails with Lockfile Error**
- Solution: Use `pnpm install`, not `npm install`
- Ensure `pnpm-lock.yaml` is committed

**2. AI Chat Returns Empty Responses**
- Check `ANTHROPIC_API_KEY` in `.env.local`
- Verify `profile.md` exists and has content
- Check API route logs for errors

**3. Blog Posts Don't Show Up**
- Ensure MDX files have correct frontmatter
- Check file names and paths
- Restart dev server

**4. Styling Issues**
- Check dark mode variants (`dark:` prefix)
- Verify Tailwind classes are valid
- Check `global.css` for conflicts

## Testing Recommendations

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] AI chat sends/receives messages
- [ ] Suggested questions work
- [ ] Dark mode toggles properly
- [ ] Blog listing displays posts
- [ ] Individual blog posts render
- [ ] Navigation highlights active page
- [ ] Work page skill matrix displays
- [ ] Skill category filtering works
- [ ] Skill selection filters projects
- [ ] "Show more/less" toggle works
- [ ] Project count indicators accurate
- [ ] Mobile responsive (375px, 768px, 1024px)
- [ ] Forms validate and submit
- [ ] Error states display properly

### Browser Testing
- Chrome/Edge (primary)
- Safari (macOS/iOS)
- Firefox
- Mobile browsers

## Future Enhancement Ideas

### High Priority
- Fill out `profile.md` with actual content
- Add more blog posts
- Add more projects to work page

### Medium Priority
- Streaming responses for AI chat
- Rate limiting for chat API
- Analytics for popular questions
- Search functionality for blog

### Low Priority
- Export conversation feature
- Voice input for chat
- Multiple language support
- RSS feed improvements

## Contact & Support

**Portfolio Owner:** Sebastian Anders
**Project Type:** Personal Portfolio
**Deployment:** Vercel
**Repository:** Uses git with main branch

## Notes for LLMs

### When Building Features
1. **Always check existing patterns** - Look at similar components first
2. **Use TypeScript** - Type everything properly
3. **Follow styling conventions** - Match existing Tailwind patterns
4. **Test dark mode** - Every new UI needs dark mode support
5. **Keep it simple** - Don't over-engineer solutions
6. **Use pnpm** - Never use npm for package management
7. **Server-first** - Only use client components when necessary
8. **Update this file** - When adding significant features

### When Debugging
1. Check the relevant section in this document
2. Read error messages carefully
3. Verify environment variables
4. Check file paths (absolute vs relative)
5. Ensure lockfile is in sync

### When Refactoring
1. Maintain existing patterns
2. Don't break dark mode
3. Keep TypeScript types updated
4. Test on multiple screen sizes
5. Update documentation if needed

---

**Last Updated:** 2026-01-21
**Version:** 1.1
**Status:** Active Development

## Recent Changes (v1.1)

### Skill Matrix Feature (2026-01-21)
- Added interactive skill matrix to work page
- 70+ skills organized by 8 categories
- Progressive disclosure: "Show more" toggle for skills without projects
- Project filtering by selected skill
- Evidence-based display with project count indicators
- Shared data architecture: `app/data/projects.ts` and `app/data/skills.ts`
- New reusable `SkillPill` component
- Fully responsive and accessible design
