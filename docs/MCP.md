# MCP Configuration

This document describes the MCP (Model Context Protocol) configuration for this project.

## Default MCPs

These MCPs are recommended for this project:

### Context7
**Purpose:** Current library/framework documentation

Use when:
- Implementing features that depend on external libraries
- Need current API documentation
- Working with version-sensitive APIs

### Chrome DevTools MCP
**Purpose:** Live frontend debugging

Use when:
- Visual verification of UI changes
- Debugging browser console errors
- Inspecting responsive layouts
- Network debugging

### GitHub MCP
**Purpose:** Repository operations

Use when:
- Creating or reviewing pull requests
- Checking CI status
- Managing issues
- Repository context

### shadcn MCP
**Purpose:** UI component registry

Use when:
- Discovering available components
- Installing shadcn/ui components
- Working with private component registries

### DeepWiki MCP
**Purpose:** Repository internals

Use when:
- Understanding unfamiliar codebases
- Investigating open-source dependencies
- Deep-diving into implementation details

## Conditional MCPs

Enable these when applicable:

### Vercel MCP
**Enable for:** Projects deployed to Vercel

Use when:
- Managing deployments
- Checking preview environments
- Viewing deployment logs
- Debugging deployment issues

### Figma MCP
**Enable for:** Projects with Figma designs

Use when:
- Retrieving design specifications
- Working with component designs
- Accessing design tokens

### Sentry MCP
**Enable for:** Production applications using Sentry

Use when:
- Debugging production errors
- Analyzing performance traces
- Investigating runtime issues

### Supabase MCP
**Enable for:** Projects using Supabase

Use when:
- Database operations
- Real-time subscriptions
- Storage operations

**Access Policy:**
- Development: Normal controlled access
- Staging: Project-scoped
- Production: Read-only by default

## Configuration

MCPs are configured in Kiro settings. Check `.kiro/settings/` for configuration.

To add a new MCP, update the Kiro settings file with the appropriate server configuration.

## MCP Routing

| Purpose | MCP |
|---------|-----|
| Current library/framework docs | Context7 |
| Repository internals | DeepWiki |
| Live frontend debugging | Chrome DevTools |
| UI component registry | shadcn MCP |
| Design source | Figma MCP |
| Repository / PR / CI | GitHub MCP |
| Deployment | Vercel MCP |
| Production errors | Sentry MCP |
| Supabase database | Supabase MCP |

## Best Practices

- Use MCPs intentionally, not automatically
- Invoke only relevant MCPs for the current task
- Don't invoke every MCP for every task
- Cache results when appropriate
