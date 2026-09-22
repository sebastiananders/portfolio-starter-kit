# GitHub footer implementation

The shared footer displays Sebastian's public GitHub contribution calendar in a monochrome grid. The GitHub profile link and pause control are hidden at the owner’s request. AI chat remains unmounted; its component and API are retained.

## Data

- Source: `https://github.com/users/sebastiananders/contributions`, fetched on the server without credentials or a third-party proxy.
- GitHub's rolling calendar includes leading days to align full weeks; its displayed year can contain slightly more than 365 days.
- Exact contribution counts come from the calendar's tooltips, and the five intensity levels come from its day cells. This is contribution activity, not exclusively commits.
- This public HTML fragment is not a versioned API. The parser validates complete, contiguous dates, counts, and intensity levels; incompatible markup is rejected.
- `unstable_cache` stores validated data for 24 hours. Failed background refreshes preserve the last successful cached result. The root layout also revalidates daily so statically generated pages can pick up refreshed data.
- When no cached data exists and loading fails, the footer retains its space. It does not manufacture an empty grid. Failures are logged server-side.
- No GitHub token or new dependency is required. The existing admin publishing credentials are not used.

## Interaction and motion

- A short staggered opacity reveal runs when the footer first becomes visible.
- A 12-second ambient cycle adds a subtle shimmer over active days while leaving their underlying intensity intact.
- Motion pauses outside the viewport and in hidden tabs. Reduced-motion preferences disable CSS animations and show a static calendar.
- Hover, focus, and tap reveal the date and exact count in a stable detail line below the grid.
- One tab stop enters the grid. Arrow keys navigate days/weeks; Home and End reach the range boundaries; Escape dismisses the selected detail.
- On narrow screens the grid scrolls horizontally and starts at the latest week.

## Verification

- Production build and type checks pass; all 66 generated pages retain static rendering.
- The live calendar was checked against GitHub's public fragment: 925 contributions over 367 dates, grouped into 53 weeks, on 2026-09-22.
- Browser checks covered desktop and 375px mobile layout, no horizontal page overflow, latest-week positioning, keyboard navigation, date selection, automatic offscreen pausing, and absence of browser errors.
- Parser tests cover leap years, exact count parsing, incomplete/malformed responses, duplicate dates, and weekday alignment.

Run the focused tests without installing a test framework:

```sh
node node_modules/typescript/bin/tsc --target es2020 --module commonjs --esModuleInterop --skipLibCheck --outDir /private/tmp/portfolio-calendar-tests tests/github-calendar.test.ts app/lib/github-calendar.ts
node --test /private/tmp/portfolio-calendar-tests/tests/github-calendar.test.js
```

Relevant files: `app/components/footer.tsx`, `app/components/contribution-grid.tsx`, `app/components/github-footer.css`, `app/lib/github-calendar.ts`, and `app/lib/github-contributions.ts`.
