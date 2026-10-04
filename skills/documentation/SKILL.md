# Documentation Skill

This skill governs documentation practices and maintenance.

## Core Principles

1. **Review after every change** — Check documentation impact
2. **Update only affected documents** — Don't modify arbitrarily
3. **Keep synchronized** — Documentation must match reality
4. **Be concise** — Documentation should be useful, not verbose
5. **Use stable identifiers** — Requirements, sections should be referenceable

## Documentation Structure

```
README.md           # Project overview, setup, commands
CHANGELOG.md        # Human-readable change history
AGENTS.md           # Agent router

docs/
├── PRD.md              # Product Requirements Document
├── ARCHITECTURE.md     # System architecture
├── DESIGN_SYSTEM.md    # UI/UX design system
└── SECURITY.md         # Security architecture

plans/              # Implementation plans
security-reports/   # Security audit reports
```

## When to Update Documentation

### README.md

Update when:
- Setup process changes
- Commands change
- Dependencies change
- Configuration changes

### CHANGELOG.md

Update after EVERY completed material change.

Format:

```markdown
## YYYY-MM-DD

### Added
- New feature description

### Changed
- Changed behaviour description

### Fixed
- Bug fix description

### UI
- UI change description

### Security
- Security change description

### Breaking
- Breaking change description (rare, requires major version)
```

### PRD.md

Update when:
- Requirements change
- Scope changes
- Acceptance criteria change
- Business rules change
- New features added
- Features removed or modified

### ARCHITECTURE.md

Update when:
- Architecture changes
- New services added
- Data flow changes
- Integration added/removed
- Deployment changes
- Major technical decisions made

### DESIGN_SYSTEM.md

Update when:
- Color palette changes
- Typography changes
- Spacing scale changes
- New component patterns established
- Design principles evolve

### SECURITY.md

Update when:
- Authentication approach changes
- Authorization model changes
- Security architecture changes
- New security requirements added

## Documentation Interface

This project includes a graphical documentation interface at `/dev/*` routes.

Routes:
- `/dev` — Overview
- `/dev/docs/prd` — PRD
- `/dev/docs/architecture` — Architecture
- `/dev/docs/design-system` — Design System
- `/dev/docs/changelog` — Changelog
- `/dev/docs/security` — Security
- `/dev/docs/tests` — Testing information

The interface renders repository Markdown files directly.

### Implementation

The documentation interface:
- Reads Markdown files from repository
- Renders with appropriate styling
- Shows document structure/outline
- Provides navigation
- Is responsive
- Follows design system

### Access Control

For production:
- Exclude `/dev/*` routes, OR
- Protect with explicit developer/admin authentication

Security reports must NOT be automatically exposed publicly.

## Documentation Best Practices

### Writing

- Write for the audience (developers, stakeholders)
- Use clear, concise language
- Include examples where helpful
- Keep up-to-date
- Link to related documents

### Structure

- Use consistent heading hierarchy
- Use stable identifiers for sections
- Group related information
- Provide navigation/TOC for long documents

### Code Documentation

- Comment WHY, not WHAT
- Document complex algorithms
- Document business rules in code
- Use JSDoc for public APIs
- Keep comments updated with code

## External Documentation

### When to Create Separate Docs

Create additional documentation when justified:

```
docs/API.md          # API documentation
docs/DATA_MODEL.md   # Database/data model
docs/DEPLOYMENT.md   # Deployment procedures
```

### When NOT to Create

Do NOT create:
- Large empty documents
- Documents without clear purpose
- Duplicates of existing documentation
- Documents that will become stale

## Changelog vs Git

**Git:** Detailed forensic history (commits, diffs, blame)
**CHANGELOG.md:** Human-readable product/development history

The changelog captures the "story" of the project.

## Review Checklist

After changes, ask:

- [ ] Does README need updates?
- [ ] Does CHANGELOG need an entry?
- [ ] Does PRD need updates?
- [ ] Does ARCHITECTURE need updates?
- [ ] Does DESIGN_SYSTEM need updates?
- [ ] Does SECURITY need updates?
- [ ] Do code comments need updates?

## Template: PRD.md

```markdown
# Product Requirements Document

## 1. Product Summary
[Concise description]

## 2. Problem / Objective
[What problem are we solving]

## 3. Target Users
[Who is this for]

## 4. User Roles
[Defined user roles]

## 5. Roles and Permissions
[Permission matrix]

## 6. Core User Journeys
[Main workflows]

## 7. Functional Requirements
[Feature requirements with IDs]

## 8. Business Rules
[Business logic rules]

## 9. Data Requirements
[Data model requirements]

## 10. Integrations
[External systems]

## 11. UI / UX Requirements
[UI/UX specifications]

## 12. Non-Functional Requirements
[Performance, scale, etc.]

## 13. Security Requirements
[Security specifications]

## 14. Edge Cases
[Edge cases to handle]

## 15. Out of Scope
[Explicitly excluded]

## 16. Acceptance Criteria
[Acceptance criteria]

## 17. Assumptions
[Assumptions made]

## 18. Open Questions
[Unresolved questions]

## 19. Release Criteria
[Definition of done]
```

## Template: CHANGELOG.md

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
-

### Changed
-

## YYYY-MM-DD

### Added
- Initial implementation
```
