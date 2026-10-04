# Next.js Template

A production-grade agentic development foundation for Next.js applications.

## Overview

This is a reusable starter repository optimized for:
- Accurate translation of requirements into working software
- Test-driven development with meaningful coverage
- Living documentation synchronized with implementation
- Security auditing and pre-push quality gates
- Responsive, accessible UI with systematic design

## Stack

- **Framework:** Next.js 16.x (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui (Base UI)
- **Icons:** lucide-react
- **Package Manager:** npm

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Commands

```bash
# Development
npm run dev          # Start development server

# Testing
npm run test         # Run unit tests
npm run test:coverage # Run with coverage

# Quality
npm run lint         # Run ESLint
npm run build        # Production build
```

## Project Structure

```
src/
├── app/             # Next.js App Router
├── components/      # React components
│   └── ui/          # shadcn/ui components
└── lib/             # Utilities

skills/              # Agent skill modules
docs/                # Project documentation
plans/               # Implementation plans
security-reports/    # Security audit reports
```

## Documentation

- `AGENTS.md` — Agent router and workflow
- `docs/PRD.md` — Product requirements
- `docs/ARCHITECTURE.md` — System architecture
- `docs/DESIGN_SYSTEM.md` — Visual design system
- `docs/SECURITY.md` — Security architecture
- `CHANGELOG.md` — Change history

## Agent Workflow

See `AGENTS.md` for the complete agent workflow.

Core workflow:
1. Understand requirements
2. Clarify material ambiguities
3. Follow the PRD
4. Use TDD for functional behaviour
5. Validate all modifications
6. Visually verify UI changes
7. Update documentation and changelog
8. Run pre-push security gate

## MCP Configuration

Default MCPs:
- **Context7** — Current library/framework documentation
- **Chrome DevTools** — Live frontend debugging
- **GitHub** — Repository operations
- **shadcn** — UI component registry
- **DeepWiki** — Repository internals

Conditional (when applicable):
- **Vercel** — Deployment
- **Figma** — Design source
- **Sentry** — Production errors
- **Supabase** — Database operations

## Security

See `docs/SECURITY.md` and `skills/security/SKILL.md` for security practices.

Pre-push security gate:
1. Review pending changes
2. Run security tools
3. Classify findings
4. Fix blocking issues
5. Re-validate

## Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## License

Private repository. All rights reserved.
