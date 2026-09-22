import assert from 'node:assert/strict'
import { test } from 'node:test'
import { calendarWeeks, parseContributionCalendar } from '../app/lib/github-calendar'

function fragment(length = 365) {
  // Deliberately reverse cell order: GitHub sends weekday rows, not date order.
  return Array.from({ length }, (_, index) => {
    const date = new Date(Date.UTC(2024, 0, 1 + index)).toISOString().slice(0, 10)
    const count = index === 0 ? '1,234' : index === 1 ? '1' : 'No'
    return `<td data-level="${index < 2 ? 4 : 0}" id="day-${index}" data-date="${date}"></td>
      <tool-tip for="day-${index}">${count} ${index === 1 ? 'contribution' : 'contributions'} on January 1st.</tool-tip>`
  }).reverse().join('\n')
}

test('parses and sorts a leap-year calendar with exact zero, singular, and comma-separated counts', () => {
  const result = parseContributionCalendar(fragment(366))
  assert.equal(result.days.length, 366)
  assert.equal(result.total, 1235)
  assert.deepEqual(result.days[0], { date: '2024-01-01', count: 1234, level: 4 })
  assert.equal(result.days[59].date, '2024-02-29')
  assert.equal(result.days[365].date, '2024-12-31')
})

test('rejects upstream errors and partial calendars rather than displaying false zero activity', () => {
  for (const html of ['<h1>Unavailable</h1>', fragment(10), fragment(372)]) {
    assert.throws(() => parseContributionCalendar(html))
  }
})

test('rejects missing counts, invalid levels, dates, and duplicate days', () => {
  const html = fragment()
  for (const invalid of [
    html.replace('1,234 contributions', 'Unknown contributions'),
    html.replace('data-level="4"', 'data-level="9"'),
    html.replace('2024-02-29', '2024-02-30'),
    html.replace('2024-01-02', '2024-01-01'),
    html.replace('1,234 contributions', 'No contributions'),
  ]) assert.throws(() => parseContributionCalendar(invalid))
})

test('aligns weekdays to Sunday and pads only outside the available range', () => {
  const data = parseContributionCalendar(fragment(366))
  const weeks = calendarWeeks(data.days)
  assert.equal(weeks.length, 53)
  assert.equal(weeks[0][0], null)
  assert.equal(weeks[0][1]?.date, '2024-01-01')
  assert.equal(weeks[52][2]?.date, '2024-12-31')
  assert.equal(weeks[52][3], null)
  assert.deepEqual(weeks.flat().filter(Boolean), data.days)
  assert.deepEqual(calendarWeeks([]), [])
})
