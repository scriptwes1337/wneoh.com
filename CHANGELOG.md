# Changelog

## 2026-10-04

### Added
- Wellesley Neoh editorial homepage, chronological writing archive and readable article pages.
- Validated Markdown publishing, draft/future/sample filtering, RSS, sitemap, metadata and branded Open Graph image.
- Supplied geometric logo, responsive imagery, keyboard access, reduced motion and persisted light/dark themes.
- Labeled development sample articles and contact placeholders.

### Changed
- Published through GitHub and Vercel, connected Cloudflare DNS for wneoh.com, and configured a permanent www-to-apex redirect while preserving mail records.
- Replaced the three sample posts with “I’m beginning to agentify my workflows,” dated 4 October 2026, on the homepage, archive, article route, RSS and sitemap.
- Updated preview and production reader tests for the first real article.
- Added a wide editorial feature layout when the homepage has a single published article.

### Security
- Escaped Markdown HTML, restricted links and local images, XML-escaped feeds, production protection for developer docs, and security response headers.
- Prevented developer documentation from leaking into serialized 404 response payloads, with a production regression test.
- Updated framework and test dependencies for security fixes.
- Removed the unused shadcn CLI and stylesheet import; replaced Next lint glob matching with a tested tinyglobby adapter to eliminate the braces dependency chain.


All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## 2026-09-16

### Added
- Initialized Next.js 16.3.5 project with TypeScript, Tailwind CSS 4, App Router
- Added shadcn/ui component library (Base UI)
- Added lucide-react for icons
- Created AGENTS.md agent router
- Created 7 core skill modules: project, requirements, engineering, testing, design, security, documentation
- Created documentation structure: PRD, ARCHITECTURE, DESIGN_SYSTEM, SECURITY, MCP, REACT_GRAB
- Created plans/ directory for implementation plans
- Created security-reports/ directory for security audits
- Added Vitest 2.x, React Testing Library, Playwright for testing
- Added documentation interface at /dev routes
- Added clean, minimal home page
- Added pre-push quality gate script
- Added .env.example for environment variable documentation
