# Publication security review

Date: 2026-10-04. Scope: initial wneoh.com publication, content loading, metadata, developer routes and dependency tree.

## Trust boundaries

Public routes are read-only. There are no credentials, authentication, database, forms, uploads or server actions. Writing and development documentation are trusted repository files. Slugs are validated and looked up rather than interpolated into filesystem paths. Images are constrained to local assets. XML output is escaped. Markdown raw HTML and unsafe URL protocols cannot execute. The fixed theme boot script has no user input; external profile links are currently empty placeholders.

## Fixed: developer documentation in production payloads

A layout-only notFound guard returned HTTP 404 but still serialized child documentation into the Next.js response. Production browser/request inspection reproduced the issue. Added guards before rendering, content reads and metadata generation in every developer page and disabled production generation of document slugs. The regression suite checks the full response body, not just the status code. Both production tests pass.

## Fixed: critical framework and test runner advisories

Updated Next.js and its ESLint package from 16.3.5 to 16.3.8; updated Vitest from 2.1.9 to 5.0.3 and aligned its coverage provider and Node 24 types. The final tree contains no critical or moderate findings.

## Historical: high severity development dependency advisory

`npm audit` reports nine high severity affected packages through the braces stack-exhaustion advisory [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Affected chains run through micromatch, fast-glob, shadcn, @shadcn/registry, @ts-morph/common, ts-morph, @next/eslint-plugin-next and eslint-config-next. These tools run during development/build operations; no public request passes glob patterns to them.

Registry checks found braces 3.0.3 as the latest version, still affected. npm's proposed fix downgrades shadcn to 1.0.0 and ESLint configuration to Next 14; this is not a compatible fix for this Next 16/Tailwind 4 application. No forced downgrade or audit suppression was applied. shadcn is now correctly classified as a development CLI dependency. `npm audit --omit=dev` reports zero vulnerabilities. The full pre-push gate remains blocked until a compatible patch resolves these high findings. No push or deployment was performed.

## Verification

- Unit tests: 13 passed, covering validation, publication filtering, real filesystem loading, duplicate slugs, Markdown safety, date formatting, RSS escaping and sitemap entries.
- Content adapter coverage: 100% statements, lines and functions; 97.36% branches (scoped to src/lib/writing.ts).
- Preview browser suite: 18 passed, desktop and Mobile Chrome, reader journey, theme persistence, XML endpoints, missing articles and no horizontal overflow at 375, 430, 768, 1024, 1440 and 1728px.
- Production browser suite: 2 passed, complete response protection, sample exclusion, canonical and branded Open Graph PNG.
- Axe accessibility checks: 12 audits passed across the three public layouts, light/dark themes and desktop/mobile. Corrected placeholder icon roles after the first audit. These automated checks do not replace a full manual accessibility audit.
- Visually inspected homepage across all six widths, plus desktop archive and desktop/mobile articles, including dark theme.
- Typecheck, lint, production build and git diff whitespace check passed.
- Full pre-push gate executed; only the development dependency audit fails with nine high findings.

## First article update

Replaced all three sample files with `agentifying-my-workflows.md`, dated 2026-10-04, drafted from the user's request about embracing AI and beginning to agentify workflows. Preview and production browser tests now assert the real article, its canonical URL, RSS entry and sitemap entry. Added a responsive single-article feature layout. The updated run passed 13 unit tests, 18 preview browser tests, 2 production browser tests, typecheck, lint, production build and whitespace checks. Desktop and mobile homepage/article layouts were visually inspected. The dependency audit still reports the same nine high development findings; no dependencies, content trust boundaries or deployment state changed.

## Release remediation

Removed the unused shadcn CLI and unused stylesheet import. A scoped override replaces Next ESLint's fast-glob with `tools/next-lint-glob`, a constrained adapter using pinned tinyglobby 0.2.17. It preserves directory path formatting. Integration tests exercise the actual Next plugin with default, string and array/brace-pattern roots, ignore nonstrings and exclude files. A clean `npm ci` passed both compatibility tests and reported zero vulnerabilities. No advisory suppression or forced framework downgrade was used. Earlier blocked results above describe the previous dependency tree.

The complete pre-push gate subsequently passed: 15 unit tests, typecheck, lint, production build and zero dependency audit findings. All 18 preview and 2 production browser tests passed. Desktop and mobile screenshots were visually inspected after removing the unused CSS import. Pending files were scanned for common credential patterns with no matches, and whitespace validation passed. No unresolved blocking findings remain.
