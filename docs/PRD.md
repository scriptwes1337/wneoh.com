# Product Requirements: wneoh.com

## Product and audience

A personal editorial publication for Wellesley Neoh (`wesnks`), a technology entrepreneur based in Singapore. Readers should understand who Wellesley is, explore his writing, and find his public profiles.

## Scope and journeys

- UI-001: Homepage with the supplied personal mark, a two-column introduction, image, latest three articles, and compact social links.
- UI-002: `/writing` presents a chronological archive with thumbnails, dates, titles and arrows. No visible category filters.
- UI-003: `/writing/[slug]` provides a back link, date, headline, editorial image and narrow serif reading column.
- UI-004: Navigation contains the mark, Writing, Links and an accessible theme toggle. Theme preference persists locally; the system preference is the initial default.
- CONTENT-001: Markdown files in `content/writing/` use required title, date, description, image, slug and draft frontmatter. Optional imageAlt and sample fields support accessibility and previews.
- CONTENT-002: Drafts and future posts are hidden. Sample posts are visible in development only, with explicit labels, and never appear in production, RSS or sitemap.
- SEO-001: Metadata, canonical URLs, branded Open Graph image, favicon, sitemap and RSS are provided.
- SEC-001: Development documentation returns 404 in production. Markdown raw HTML is escaped and executable links are rejected.

## Design

Warm off-white and near-black themes, modern grotesk interface typography, confident large headings, serif article body, a strong grid and thin separators. Restrained arrows and image hover motion respect reduced motion. Responsive across mobile, tablet and desktop; semantic headings, keyboard focus and 44px controls.

## Content and integrations

No CMS, authentication, analytics, forms or database in the initial release. A typed article adapter isolates filesystem content from the UI so a CMS can replace the loader later. Public visitors have read access only; publishing happens through trusted repository edits.

## Out of scope

Separate About, Projects, Experience, Services, Contact, Ventures or Portfolio pages; career history, case studies, metrics, testimonials, categories and elaborate animation.

## Confirmed decisions and outstanding assets

- The project-root PNG supplied by the user is the primary logo.
- Contact information remains placeholder text until confirmed URLs and email are supplied.
- The user requested replacing the three preview samples with a first-person post about embracing AI and beginning to agentify workflows. The initial article is dated 2026-10-04 and is available in local preview and production builds.
- The homepage uses the approved square profile portrait prepared from the user’s supplied photograph.
- The article was drafted from the user’s stated direction; it avoids invented past experiences, tools, metrics and outcomes.

## Acceptance and release criteria

Homepage → archive → article → archive works on desktop and mobile. Theme persists after reload. Invalid articles return 404. No horizontal overflow at 375, 430, 768, 1024, 1440 or 1728px. RSS and sitemap contain published content only. Production does not expose sample articles or developer documentation. Run unit tests, typecheck, lint, production build, browser tests and dependency audit. Do not push with unresolved blocking findings.
