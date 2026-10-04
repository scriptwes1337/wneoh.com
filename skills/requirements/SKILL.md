# Requirements Skill

This skill governs the conversion of user intent into implementation-ready requirements.

## Core Principles

1. **Understand before implementing** — Read existing context before asking questions
2. **Use existing context** — Check PRD, codebase, and documentation first
3. **Ask about material ambiguity** — Do not silently invent important product behaviour
4. **Group related questions** — Ask related clarifying questions together
5. **Distinguish decisions** — Separate product decisions from engineering decisions
6. **Record assumptions** — Document what was assumed and why
7. **Identify contradictions** — Flag conflicting requirements immediately

## Requirements Lifecycle

```
User Intent
→ Understand Context
→ Identify Gaps
→ Clarify Material Ambiguity
→ Document in PRD
→ Define Acceptance Criteria
→ Track Business Rules
→ Maintain Throughout Development
```

## When to Ask vs. Decide

### Ask the user about:

- Business logic rules
- User workflow and journeys
- Permissions and roles
- Architecture decisions
- Data model design
- Integrations
- Security requirements
- Payment behaviour
- Authentication approach
- Product scope boundaries
- UI direction
- Major interaction behaviour
- Destructive operations
- Irreversible decisions

### Decide independently:

- Code organization
- Component structure
- Naming conventions
- Minor implementation details
- Standard patterns
- Error handling approaches
- Performance optimizations
- Testing strategies

## PRD Maintenance

The PRD (`docs/PRD.md`) is the living product truth.

When requirements change:

1. Update the PRD with clear rationale
2. Identify affected implementation
3. Identify affected tests
4. Identify affected documentation
5. Update changelog
6. Implement the change
7. Validate new behaviour

### Requirement Identifiers

Use stable identifiers for traceability:

```
AUTH-001  — Authentication requirement
USER-004  — User management requirement
PAY-007   — Payment requirement
SEC-005   — Security requirement
UI-012    — UI requirement
```

Format: `[DOMAIN]-[NUMBER]`

## Acceptance Criteria

Each requirement should have clear, testable acceptance criteria.

Format:

```
REQ-001: User can reset password

Acceptance Criteria:
- User can request password reset via email
- Reset link expires after 24 hours
- User can set new password via reset link
- User receives confirmation email after reset
- Invalid/expired tokens show appropriate error
```

## Contradiction Resolution

When conflicting requirements are identified:

1. Document the contradiction explicitly
2. Present options with tradeoffs
3. Let the user decide
4. Record the decision in PRD
5. Update affected work

## Assumptions Register

Document significant assumptions:

```
## Assumptions

- ASSUME-001: Users access via modern browsers (Chrome, Firefox, Safari, Edge)
- ASSUME-002: Primary device is desktop, mobile is secondary
- ASSUME-003: English is the primary language
```

## Out of Scope

Explicitly document what is NOT being built:

```
## Out of Scope

- Mobile native applications
- Multi-tenant support
- Real-time collaboration features
```

## Questions to Ask

### Project Initialization

1. What is the core problem being solved?
2. Who are the target users?
3. What are the must-have features?
4. What integrations are required?
5. What are the security requirements?
6. What is the expected scale?

### Feature Development

1. What triggers this feature?
2. What should happen?
3. Who can access it?
4. What happens on error?
5. What are the edge cases?
6. How does this relate to existing features?

## Requirements Interview Guidelines

- Be efficient — group related questions
- Don't ask questions with answers already in context
- Present options when helpful
- Explain why you're asking if not obvious
- Summarize understanding before implementing
