# Portfolio implementation

Bilingual editorial portfolio (Portuguese by default, with English available) for Jefferson B. Mendonça, built on the
existing React 19, TypeScript, Tailwind CSS 4 and Vite configuration.

## Development

Use Node.js 24 (`nvm use`) and npm:

```sh
npm ci
npm run dev
npm run ci:local
```

`npm run ci:local` reinstalls dependencies, runs the three TypeScript checks,
ESLint, Prettier, duplication detection and the production build.

## Content and structure

- `src/data/profile.ts`: identity, contact links, experience, education, skills,
  languages and recognition, translated from the supplied Portuguese résumé.
- `src/data/projects.ts`: typed project summaries and case-study chapters.
- `src/components/`: navigation, section headings, project links and local clock.
- `src/sections/`: the editorial opening and all profile sections.
- `src/pages/`: home, shared case-study template and not-found state.
- `src/hooks/usePageNavigation.ts`: document titles, route scroll and focus.
- `src/index.css`: shared tokens, responsive editorial layout and CSS motion.
- `public/jefferson-mendonca-resume-pt.pdf`: original Portuguese résumé, used in the Portuguese version.
- `public/jefferson-mendonca-resume-en.pdf`: supplied English résumé, used in the
  English version.
- `src/data/portuguese.ts`: Portuguese profile and case-study content.
- `src/i18n/`: typed bilingual content and language context. The fixed top-right
  control switches all pages without changing routes. The choice persists in
  local storage; Portuguese is the default when no preference exists or storage
  is unavailable. Language changes update document language, titles, metadata and
  clock formatting without resetting navigation scroll.

React Router is the only added runtime dependency. It handles case-study URLs,
back/forward navigation and unknown paths. Motion uses CSS; no animation or UI
library is required. Playfair Display and Source Serif 4 load through Google
Fonts with `display=swap` and Georgia fallbacks. No backend, tracking or form
service is used.

## Content boundaries

The original résumé is the source for professional claims, including the 2026
IEL award (first at state level, fourth nationally). The 5,000-user figure refers
to the combined institutional software developed at Senac, not specifically to
Sofia IA Hub. Project start/end dates are not provided. Sofia’s year label refers
to its award, and DireitoAI explicitly states that its date is undocumented.

Case studies identify missing supporting materials in visible editorial notes.
There are no invented screenshots, public project URLs, performance metrics or
architecture diagrams. Detailed trade-offs and measured outcomes can be added
when verified materials become available. No certifications were listed in the
source résumé.

## Publication

Build with `npm run build` and publish `dist/` to a static host. Configure an SPA
fallback: requests that do not match an existing static file must serve
`/index.html`. Keep real static assets (including the PDF) ahead of this fallback.
For example, on Netlify use the equivalent of `/* /index.html 200` as the final
rewrite; on Nginx use `try_files $uri $uri/ /index.html`.

Verify direct loads and refreshes of `/work/sofia-ia-hub` and `/work/direito-ai`
on the chosen host. An unknown URL renders the app’s not-found page; a purely
static SPA host may still return HTTP 200 for that page.

No production domain has been supplied, so no canonical or invented `og:url`
is included. Add those after selecting the final domain. Basic description,
Open Graph text, localized language metadata and an SVG favicon are included.
Route-specific titles update in the browser; social previews use the shared
HTML metadata. No deployment has been performed.

## Validation performed

- `npm run ci:local`: all eight stages passed after the final layout changes;
  no TypeScript diagnostics, ESLint warnings or duplicated blocks.
- `git diff --check`: passed.
- Production build inspected in headless Chrome at 320, 375, 390, 768, 1024 and
  1440 CSS pixels. Document scroll width never exceeded client width.
- Confirmed black background, loaded serif fonts, one main heading and valid
  fragment destinations. Inspected desktop/mobile screenshots and internal pages.
- Confirmed mobile menu open/close, Escape focus return, anchor navigation,
  visible keyboard focus, direct case-study routes, not-found state, browser back
  navigation and successful PDF response. No JavaScript exceptions observed.
- Reduced-motion emulation disabled smooth scrolling and entrance animation.
- Reflow checked at a 720 × 450 CSS-pixel viewport with device scale factor 2,
  equivalent to the available layout area of a 1440 × 900 display at 200% zoom.
  Native browser zoom was not manually tested.

These browser checks were one-off QA via Chrome DevTools Protocol, not a new
repository test runner. Other browser engines and assistive technologies have
not been tested in this environment.

Bilingual update validation: the full pipeline passed again. Both languages
were checked at all six viewport widths with no horizontal overflow. Chrome
checks confirmed Portuguese defaults, keyboard activation of the switcher,
English persistence after reload, translated case-study navigation, unchanged
route and scroll position when switching, and switching with storage blocked.
Both PDF URLs returned HTTP 200; the English PDF checksum matches the supplied
file. No JavaScript exceptions were observed.
