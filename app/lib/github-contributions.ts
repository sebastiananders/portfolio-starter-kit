import 'server-only'
import { unstable_cache } from 'next/cache'
import { parseContributionCalendar } from './github-calendar'

// Cache validated data: failed refreshes retain the last successful result
// in Next's persistent Data Cache. No credential or third-party proxy needed.
export const getGitHubContributions = unstable_cache(async () => {
  const response = await fetch('https://github.com/users/sebastiananders/contributions', {
    headers: { Accept: 'text/html', 'Accept-Language': 'en-US', 'User-Agent': 'sebastian-anders-portfolio' },
    signal: AbortSignal.timeout(8000),
  })
  if (!response.ok) throw new Error(`GitHub calendar returned ${response.status}`)
  return parseContributionCalendar(await response.text())
}, ['github-contributions-sebastiananders-v1'], { revalidate: 86400 })
