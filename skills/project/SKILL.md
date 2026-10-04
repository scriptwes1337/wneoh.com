# Project Context Skill

This skill provides current project context for the Next.js template starter.

## Project Overview

**Name:** nextjs-template-scriptwes1337 (placeholder)
**Purpose:** Reusable starter repository for future software projects
**Type:** Next.js application template

## Technology Stack

- **Framework:** Next.js 16.3.5
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Component Library:** shadcn/ui (Base UI)
- **Icons:** lucide-react
- **Package Manager:** npm
- **App Directory:** Yes (App Router)
- **Source Directory:** `src/`
- **Import Alias:** `@/*`

## Important Directories

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # React components
│   └── ui/        # shadcn/ui components
└── lib/           # Utilities and helpers

skills/            # Agent skill modules
docs/              # Project documentation
plans/             # Implementation plans
security-reports/  # Security audit reports
```

## Development Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Testing Commands

```bash
npm run test           # Run unit tests
npm run test:coverage  # Run tests with coverage
npm run test:e2e       # Run E2E tests
```

## Build Commands

```bash
npm run build      # Production build
npm run typecheck  # TypeScript type checking
```

## Conventions

- Use `@/*` import alias for absolute imports
- Components in `src/components/`
- Utilities in `src/lib/`
- App Router conventions (page.tsx, layout.tsx, loading.tsx, etc.)
- Tailwind CSS for styling
- shadcn/ui for UI components

## Known Constraints

- This is a template repository, not a production application
- Product requirements are populated during project initialization
- Design system is intentionally minimal and adaptable

## Active Integrations

- shadcn/ui component registry
- External MCPs as configured

## Current Implementation State

Initial scaffold complete. Ready for project-specific requirements.
