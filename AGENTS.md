# Project Agent Router

This file routes tasks to specialized skill modules. Load only skills relevant to the current task.

## Core Workflow

Before substantial work:

1. Read project context (`skills/project/SKILL.md`)
2. Inspect the relevant code
3. Determine whether requirements are sufficiently clear
4. Ask the user about material ambiguities
5. Follow the current PRD (`docs/PRD.md`)
6. Load only skills relevant to the task
7. Use TDD for functional behaviour where practical
8. Validate all modifications
9. Visually verify UI modifications
10. Review documentation impact after every change
11. Update `CHANGELOG.md` after every completed change
12. Run the complete pre-push quality and security gate
13. Do not push with unresolved blocking issues
14. Never claim tests, visual verification, coverage, builds or audits were performed unless actually performed

## Skill Routing

| Task Type                                         | Skill                           |
| ------------------------------------------------- | ------------------------------- |
| Requirements / product scope                      | `skills/requirements/SKILL.md`  |
| General implementation                            | `skills/engineering/SKILL.md`   |
| Tests / regression / TDD                          | `skills/testing/SKILL.md`       |
| Frontend / UI / responsive / visual work          | `skills/design/SKILL.md`        |
| Security-sensitive work / pre-push audit          | `skills/security/SKILL.md`      |
| Documentation / PRD / changelog / docs interface  | `skills/documentation/SKILL.md` |
| Project architecture / commands / current context | `skills/project/SKILL.md`       |

## When to Ask

Ask before making material assumptions about:

- Business logic
- User workflow
- Permissions and roles
- Architecture decisions
- Data model
- Integrations
- Security
- Payment behaviour
- Authentication
- Product scope
- UI direction
- Major interaction behaviour
- Destructive behaviour
- Irreversible architectural decisions

Do not ask about trivial engineering implementation details that a competent senior engineer should decide independently.

## External Skills

This project supports these external skills when relevant:

- `frontend-design` — UI/UX guidance
- `agent-browser` — Browser automation and inspection
- `react-grab` — Component context extraction during development (see `docs/REACT_GRAB.md`)
- `security-review` — Security auditing
- `gsd` — General software development
- `documentation-writer` — Documentation assistance

Load external skills when their specialized capabilities are needed. Do not duplicate their contents in local skills.

## MCP Routing

| Purpose                        | MCP             |
| ------------------------------ | --------------- |
| Current library/framework docs | Context7        |
| Repository internals           | DeepWiki        |
| Live frontend debugging        | Chrome DevTools |
| UI component registry          | shadcn MCP      |
| Design source                  | Figma MCP       |
| Repository / PR / CI           | GitHub MCP      |
| Deployment                     | Vercel MCP      |
| Production errors              | Sentry MCP      |
| Supabase database              | Supabase MCP    |

Use MCPs intentionally. Do not invoke every MCP for every task.
