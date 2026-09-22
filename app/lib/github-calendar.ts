export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionCalendar {
  days: ContributionDay[]
  total: number
}

function attribute(tag: string, name: string): string | undefined {
  return new RegExp(`\\b${name}="([^"]*)"`).exec(tag)?.[1]
}

// Exact counts come from the public calendar's linked tooltips. Fail closed
// if GitHub changes its markup, rather than inventing empty contribution days.
export function parseContributionCalendar(html: string): ContributionCalendar {
  const counts = new Map<string, number>()
  for (const match of Array.from(html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g))) {
    const id = attribute(match[1], 'for')
    const count = /^(No|[\d,]+) contributions? on\b/.exec(match[2].trim())?.[1]
    if (id && count) counts.set(id, count === 'No' ? 0 : Number(count.replace(/,/g, '')))
  }
  const days: ContributionDay[] = []
  for (const [tag] of Array.from(html.matchAll(/<td\b[^>]*\bdata-date="[^">]*"[^>]*>/g))) {
    const date = attribute(tag, 'data-date')
    const rawLevel = attribute(tag, 'data-level')
    const count = counts.get(attribute(tag, 'id') || '')
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^[0-4]$/.test(rawLevel || '') ||
        count === undefined || !Number.isSafeInteger(count) || count < 0) {
      throw new Error('Unrecognized GitHub contribution day')
    }
    const timestamp = Date.parse(`${date}T00:00:00Z`)
    if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== date ||
        (count === 0) !== (rawLevel === '0')) throw new Error('Invalid GitHub contribution day')
    days.push({ date, count, level: Number(rawLevel) })
  }
  days.sort((a, b) => a.date.localeCompare(b.date))
  if (days.length < 365 || days.length > 371) throw new Error('Incomplete GitHub contribution year')
  for (let i = 1; i < days.length; i++) {
    if (Date.parse(days[i].date) - Date.parse(days[i - 1].date) !== 86400000) {
      throw new Error('Non-contiguous GitHub contribution calendar')
    }
  }
  return { days, total: days.reduce((total, day) => total + day.count, 0) }
}

export function calendarWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  if (!days.length) return []
  const offset = new Date(`${days[0].date}T00:00:00Z`).getUTCDay()
  const cells: (ContributionDay | null)[] = [...Array(offset).fill(null), ...days]
  while (cells.length % 7) cells.push(null)
  return Array.from({ length: cells.length / 7 }, (_, index) => cells.slice(index * 7, index * 7 + 7))
}
