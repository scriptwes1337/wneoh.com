# Project Context Skill

## Project overview

**Name:** wneoh.com
**Purpose:** Wellesley Neoh's personal editorial publication
**Stack:** Next.js 16.3.8 App Router, React 19, TypeScript, Tailwind CSS 4, Geist, lucide-react. Use npm and Node.js 24.

## Structure

- `src/app/`: homepage, writing archive, individual articles, RSS, sitemap, robots and branded Open Graph image.
- `src/components/site/`: reusable publication interface and theme toggle.
- `src/components/ui/`: starter Base UI/shadcn components.
- `src/lib/site.ts`: identity, logo, portrait and contact configuration.
- `src/lib/writing.ts`: validated Markdown content adapter and publication rules.
- `content/writing/`: trusted Markdown articles with frontmatter.
- `public/images/`: local brand mark, approved profile portrait and editorial illustrations.
- `docs/`: current requirements, architecture, design and security documentation.
- `e2e/`, `e2e-production/`: preview reader journeys and production regressions.
- `security-reports/`: audit findings, never exposed through public routes.

## Commands

`npm ci`, `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run test:coverage`, `npm run test:e2e`, `npm run test:production`, `npm run pre-push`.

Set `PLAYWRIGHT_BASE_URL` to check an existing preview at a different port. Production tests use port 3002. `/dev` is available for local documentation only; each page guards against production rendering and serialization.

## Conventions and constraints

Use `@/*` imports. Public pages are server components; theme switching is a client component. Write articles in Markdown, not executable MDX. Required frontmatter is title, date, description, image, slug and draft. Optional imageAlt and sample fields provide accessibility and preview labels. Drafts and future posts remain unpublished. Development samples never enter production, RSS or sitemap. Publishing requires a rebuild.

Use the supplied geometric logo. Contact details stay placeholders until confirmed. The hero uses the approved square head-and-shoulders profile portrait. Read `docs/PRD.md` before changing scope or introducing new sections.

## Release status

Implementation and browser verification are complete. The full pre-push gate passed with zero audit findings; see `security-reports/2026-10-04-publication.md`. Production is deployed at `https://wneoh.com` through Vercel project `wneoh-com` in team `scriptwes-projects`, linked to GitHub `main`. Cloudflare hosts DNS-only apex/www records and www redirects to the apex. Preserve iCloud mail records. Both domains show valid Vercel configuration.
