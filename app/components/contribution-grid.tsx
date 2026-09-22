'use client'

import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { calendarWeeks, type ContributionCalendar, type ContributionDay } from '../lib/github-calendar'

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
const monthFormat = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' })
const rangeFormat = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
const atUTC = (date: string) => new Date(`${date}T00:00:00Z`)
const describe = (day: ContributionDay) => `${day.count.toLocaleString('en-US')} ${day.count === 1 ? 'contribution' : 'contributions'} · ${dateFormat.format(atUTC(day.date))}`

export default function ContributionGrid({ calendar }: { calendar: ContributionCalendar }) {
  const weeks = calendarWeeks(calendar.days)
  const first = calendar.days[0]
  const last = calendar.days[calendar.days.length - 1]
  const [selected, setSelected] = useState<ContributionDay | null>(null)
  const [focusDate, setFocusDate] = useState(last.date)
  const [entered, setEntered] = useState(false)
  const [inView, setInView] = useState(false)
  const [visible, setVisible] = useState(true)
  const [reduced, setReduced] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const buttons = useRef(new Map<string, HTMLButtonElement>())
  const summaryId = useId()
  const running = inView && visible && !reduced

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReduced(media.matches)
    const updateVisibility = () => setVisible(document.visibilityState === 'visible')
    updateMotion()
    updateVisibility()
    media.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateVisibility)
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
      if (entry.isIntersecting) setEntered(true)
    }, { threshold: 0.2 })
    if (root.current) observer.observe(root.current)
    if (scroller.current) scroller.current.scrollLeft = scroller.current.scrollWidth
    return () => {
      observer.disconnect()
      media.removeEventListener('change', updateMotion)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  function navigate(event: KeyboardEvent<HTMLButtonElement>, day: ContributionDay) {
    const index = calendar.days.findIndex((entry) => entry.date === day.date)
    const delta = { ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1 }[event.key]
    let next: number
    if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = calendar.days.length - 1
    else if (delta !== undefined) next = Math.max(0, Math.min(calendar.days.length - 1, index + delta))
    else if (event.key === 'Escape') { setSelected(null); return }
    else return
    event.preventDefault()
    const target = calendar.days[next]
    setFocusDate(target.date)
    const button = buttons.current.get(target.date)
    button?.focus({ preventScroll: true })
    button?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }

  return (
    <div ref={root} className="github-calendar" data-entered={entered} data-running={running}>
      <div className="github-calendar-heading">
        <p>A year of building</p>
      </div>
      <p id={summaryId} className="sr-only">
        {calendar.total.toLocaleString('en-US')} GitHub contributions from {dateFormat.format(atUTC(first.date))} to {dateFormat.format(atUTC(last.date))}.
        Use arrow keys to explore days, Home for the first day, and End for the latest day.
      </p>
      <div ref={scroller} className="github-calendar-scroll">
        <div className="github-calendar-content" style={{ '--weeks': weeks.length } as CSSProperties}>
          <div className="github-months" aria-hidden="true">
            {weeks.map((week, index) => {
              const monthStart = week.find((day) => day?.date.endsWith('-01'))
              return <span key={index}>{monthStart && index < weeks.length - 2 ? monthFormat.format(atUTC(monthStart.date)) : ''}</span>
            })}
          </div>
          <div role="grid" aria-label="Daily GitHub contributions" aria-describedby={summaryId} aria-rowcount={7} aria-colcount={weeks.length}
            onMouseLeave={() => { if (!root.current?.contains(document.activeElement)) setSelected(null) }}>
            {Array.from({ length: 7 }, (_, row) => (
              <div role="row" className="github-calendar-row" key={row}>
                {weeks.map((week, column) => {
                  const day = week[row]
                  if (!day) return <span role="gridcell" aria-disabled="true" key={column} />
                  return <button key={day.date} type="button" role="gridcell" className="github-day"
                    data-level={day.level} data-date={day.date} data-selected={selected?.date === day.date}
                    style={{ '--reveal-delay': `${column * 8 + row * 12}ms`, '--shimmer-delay': `${column * 32 + row * 30}ms` } as CSSProperties}
                    ref={(element) => { if (element) buttons.current.set(day.date, element); else buttons.current.delete(day.date) }}
                    tabIndex={focusDate === day.date ? 0 : -1} aria-label={describe(day)}
                    onMouseEnter={() => setSelected(day)} onFocus={() => { setFocusDate(day.date); setSelected(day) }}
                    onBlur={(event) => { if (!event.currentTarget.parentElement?.parentElement?.contains(event.relatedTarget)) setSelected(null) }}
                    onClick={() => { setFocusDate(day.date); setSelected(day) }} onKeyDown={(event) => navigate(event, day)} />
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="github-calendar-caption">
        <span>{calendar.total.toLocaleString('en-US')} contributions</span>
        <span className="github-day-detail" aria-live="polite" aria-atomic="true">
          {selected ? describe(selected) : `${rangeFormat.format(atUTC(first.date))} — ${rangeFormat.format(atUTC(last.date))}`}
        </span>
      </div>
    </div>
  )
}
