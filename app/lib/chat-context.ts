import fs from 'fs'
import path from 'path'

// Keep basic context as fallback
export const portfolioContext = {
  name: "Sebastian Anders",
  title: "Design-led Product Lead",
  experience: "15 years",
}

// Load detailed profile from markdown file
export function loadProfileData(): string {
  try {
    const profilePath = path.join(process.cwd(), 'app', 'data', 'profile.md')
    const profileContent = fs.readFileSync(profilePath, 'utf8')
    return profileContent
  } catch (error) {
    console.warn('Could not load profile.md, using basic context')
    return ''
  }
}

export function buildSystemPrompt(): string {
  const detailedProfile = loadProfileData()

  const basePrompt = `You are an AI assistant representing Sebastian Anders, a design-led product lead with ${portfolioContext.experience} in digital products.`

  if (detailedProfile) {
    return `${basePrompt}

Here is Sebastian's complete professional profile:

${detailedProfile}

Instructions:
- Answer questions about Sebastian's professional background, design philosophy, projects, and experience
- Use specific details from the profile when relevant
- Be conversational but professional
- Keep responses concise (2-3 paragraphs max unless asked for details)
- If asked about something not in the profile, suggest contacting Sebastian directly
- Emphasize his pragmatic, no-BS approach to design
- Don't make up information not provided in the profile`
  }

  // Fallback to basic context if profile not available
  return `${basePrompt}

Background:
Design-led product lead. I take products from opportunity to release — discovery, roadmap and requirements, alignment with executives and engineering — and still prototype in code. 15 years in digital products across B2B and B2C.

Philosophy: I know my shit. And I know how bullshit looks like. Not for A/B nor countless iterations.

Notable clients: Miele, Porsche, IBM, Deutsche Bahn, BASF, Bundesministerium der Finanzen, Techniker Krankenkasse

Instructions:
- Answer questions about Sebastian's professional background and design philosophy
- Be conversational but professional
- Keep responses concise
- Suggest contacting Sebastian for specific project details`
}
