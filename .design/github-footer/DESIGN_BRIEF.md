# Design Brief: GitHub Activity Footer

## Decisions

- Confirmed: hide the site-wide AI chat for now; retain its implementation for possible restoration.
- Confirmed: a GitHub-style contribution grid showing a full year.
- Confirmed: ambient animation.
- Updated: hide the GitHub profile link and manual pause control.
- Implemented in the shared footer. See `IMPLEMENTATION.md` for the data source, refresh behavior, and verification.

## Problem

Portfolio visitors should get a quiet sense of Sebastian's ongoing building activity at the end of a page, without needing to open another project or read another section.

## Solution

A small contribution calendar in the normal page footer, showing the trailing twelve months of GitHub activity for `sebastiananders`. Seven rows represent weekdays; columns represent weeks. The grid reveals gently on entering the viewport, then occasionally shimmers across active days.

Actual contribution counts determine each cell's resting intensity. Animation is decorative and never implies a new contribution or a live event.

## Experience Principles

1. Keep the content primary: motion stays subtle and confined to the footer.
2. Preserve the meaning of the data: the calendar remains legible while animated.
3. Make detail optional: dates and counts appear on interaction, with a clear path to GitHub.

## Aesthetic Direction

- Philosophy: restrained, typographic minimalism matching the existing portfolio.
- Tone: calm, technical, quietly alive.
- Reference: GitHub's contribution calendar, rendered in the site's neutral palette.
- Avoid: glowing neon, particles, flashing cells, simulated live commits, or a dashboard-like collection of metrics.
- Use softly rounded squares and a subtle five-step intensity scale in light and dark modes.

## Existing Patterns

- Styling: Tailwind 3 utilities, neutral colors, system-controlled dark mode.
- Typography: inherit the site's existing type; small dates and counts may use monospace.
- Layout: footer follows page content, aligned with the existing narrow `max-w-xl` wrapper.
- Current footer component is empty. The fixed chat mount and its reserved bottom padding have been removed from the root layout.
- No animation library is currently installed; this feature should not require one.

## Component Inventory

| Component | Status | Notes |
| --- | --- | --- |
| Footer | Modify | Add spacing, contribution visualization, and GitHub link |
| Contribution grid | New | Seven weekday rows, full trailing year, understated month labels |
| Day detail | New | Date and count on hover, keyboard focus, or tap |
| Contribution data loader | New | Server-side retrieval and caching of real calendar data |

## Key Interactions

- Entrance: a low-amplitude reveal moves from older to newer weeks in roughly one second, once per mount.
- Ambient: approximately every 10–14 seconds, a faint shimmer crosses active cells over 2–3 seconds. Keep a stable base grid beneath the effect; no scaling or layout movement.
- Hover/focus/tap: show the day's date and actual contribution count; give that cell clear focus without changing neighboring cells.
- Motion pauses when offscreen or when the browser tab is hidden.

## Responsive Behavior

- Desktop: display the full year within the reading-width footer, about 53 week columns (calendar boundaries may require an extra column).
- Mobile: keep usable cell sizes and horizontally scroll the same full-year grid, initially positioned at the latest week.
- Leave enough space above the footer to separate it from the page's content. It is not fixed to the viewport.
- Tooltips stay within the viewport and do not obstruct scrolling.

## Data and Resilience

- Use the contribution totals represented by the public GitHub profile, rather than commit events alone. Do not expose private repository names or details.
- Refresh cached data daily; the visualization is a historical calendar, not a live activity feed.
- Confirm the data retrieval method and any server-only credential requirement during implementation. Never expose credentials to the browser.
- Preserve the last successful calendar if refresh fails. With no valid data, preserve the footer space without fabricated counts or a misleading empty calendar.
- Reserve layout space during loading. The rest of the portfolio must remain available if GitHub is unavailable.

## Accessibility Requirements

- Honor reduced-motion preferences: render the settled grid without reveal or shimmer.
- Use opacity changes without flashes; the manual pause control is hidden at the owner’s request.
- Provide an accessible text summary of the date range and total contributions.
- Make day details available by keyboard and touch, not hover alone. Use arrow-key navigation within the grid rather than hundreds of sequential tab stops.
- Use visible focus states and readable tooltip/label contrast; communicate exact values in text so intensity is not the only way to understand the data.

## Out of Scope

- Replacing or deleting the chat backend.
- Technology/language breakdowns, repository feeds, or private repository details.
- Live event streaming, WebGL, heavy animation dependencies, or invented activity.
- Changes to page content, deployment, or publishing as part of this planning step.
