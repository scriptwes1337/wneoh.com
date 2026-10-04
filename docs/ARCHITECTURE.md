# Architecture

This document describes the system architecture for this Next.js template repository.

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.x |
| Runtime | Node.js | 20.x+ |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Component Library | shadcn/ui (Base UI) | Latest |
| Icons | lucide-react | Latest |
| Package Manager | npm | 10.x+ |

## Architecture Overview

### App Router Architecture

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   └── [routes]/        # Application routes
├── components/          # React components
│   ├── ui/              # shadcn/ui components
│   └── [features]/      # Feature-specific components
└── lib/                 # Utilities and helpers
```

### Agent Architecture

```
AGENTS.md                # Agent router
skills/
├── project/             # Project context
├── requirements/        # Requirements handling
├── engineering/         # Implementation practices
├── testing/             # Testing practices
├── design/              # UI/UX practices
├── security/            # Security practices
└── documentation/       # Documentation practices
```

### Documentation Structure

```
docs/
├── PRD.md               # Product requirements
├── ARCHITECTURE.md      # This document
├── DESIGN_SYSTEM.md     # Design system
└── SECURITY.md          # Security architecture
```

## Key Architectural Decisions

### App Router over Pages Router

Using Next.js App Router for:
- Server Components by default
- Streaming and partial rendering
- Simplified data fetching
- Better performance characteristics

### TypeScript Strict Mode

Type safety throughout the codebase for:
- Catch errors at compile time
- Better IDE support
- Self-documenting code
- Safer refactoring

### Tailwind CSS 4

Utility-first CSS for:
- Rapid development
- Consistent design tokens
- Small production bundles
- No context switching between CSS and JSX

### shadcn/ui with Base UI

Component library choice:
- Accessible by default
- Unstyled components with Tailwind styling
- Full control over component code
- No lock-in to a specific design system

## Request Flow

```
Browser Request
    ↓
Next.js App Router
    ↓
Server Component (default)
    ↓
Fetch Data (if needed)
    ↓
Render HTML
    ↓
Client Hydration
    ↓
Interactive Page
```

## Deployment Architecture

For Vercel deployment:
- Edge functions for dynamic routes
- Static generation where possible
- Incremental Static Regeneration (ISR) where appropriate
- Environment variables via Vercel dashboard

## Security Architecture

See `docs/SECURITY.md` for detailed security architecture.

## Integration Points

Default MCP integrations:
- Context7 — Current library/framework documentation
- Chrome DevTools MCP — Live frontend debugging
- GitHub MCP — Repository operations
- shadcn MCP — UI component registry
- DeepWiki MCP — Repository internals

Conditional integrations (when applicable):
- Vercel MCP — Deployment
- Figma MCP — Design source
- Sentry MCP — Production errors
- Supabase MCP — Database operations

## Development Workflow

```
Local Development
    ↓
Feature Branch
    ↓
Implementation (TDD)
    ↓
Tests Pass
    ↓
Build Succeeds
    ↓
Security Audit
    ↓
Pull Request
    ↓
CI Checks
    ↓
Merge to Main
```

## Known Constraints

- This is a template repository
- Product requirements are project-specific
- Database/architecture decisions are made per-project
