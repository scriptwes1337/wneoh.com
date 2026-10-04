# Engineering Skill

This skill governs implementation practices for the codebase.

## Core Principles

1. **Inspect before editing** — Understand existing code before modifying
2. **Smallest correct change** — Make minimal targeted changes
3. **Preserve user changes** — Don't overwrite unrelated modifications
4. **Follow established patterns** — Match existing architecture
5. **Explicit over implicit** — Keep interfaces clear and typed
6. **Separate concerns** — Business logic separate from presentation

## Before You Code

1. Read relevant existing code
2. Understand surrounding implementation
3. Check for established patterns
4. Identify affected tests
5. Consider edge cases
6. Plan your approach

## Code Quality Standards

### TypeScript

- Use strong typing throughout
- Avoid `any` — use `unknown` when type is truly unknown
- Define explicit interfaces for data shapes
- Use discriminated unions for state management
- Do not silence errors to make code compile

### React Components

- Keep components focused and cohesive
- Extract reusable logic into hooks
- Keep business logic separate from UI
- Use React best practices (keys, effects, memo)
- Handle loading and error states explicitly

### Styling

- Use Tailwind CSS utilities
- Follow design system tokens
- Maintain responsive behaviour
- Ensure accessibility

### Error Handling

- Handle errors explicitly
- Provide meaningful error messages
- Don't suppress meaningful warnings
- Log errors appropriately
- Fail gracefully for users

## Code Review Checklist

Before considering implementation complete:

- [ ] TypeScript compiles without errors
- [ ] Lint passes
- [ ] Tests pass
- [ ] Edge cases handled
- [ ] Error states handled
- [ ] Loading states handled
- [ ] Responsive where applicable
- [ ] Accessible where applicable
- [ ] No hardcoded secrets
- [ ] No commented-out code in production paths

## Dependency Management

Before adding a dependency:

1. Does the project already provide this capability?
2. Is a lightweight implementation reasonable?
3. Is the package actively maintained?
4. Is it compatible with our stack?
5. Are there security implications?
6. Is the dependency size justified?

## Anti-Patterns to Avoid

- Giant components or files
- Deeply coupled modules
- Hidden side effects
- Magic constants without context
- Duplicated business logic
- Premature abstraction
- Unnecessary dependencies
- Bypassing permission checks
- Weakening validation to make things work
- Suppressing errors instead of fixing them
- Leaving core functionality as placeholders
- Implementing fake functionality (unless explicitly requested)

## Destructive Operations

Require explicit user approval for:

- Deleting substantial data
- Destructive database migrations
- Force pushing
- Rotating credentials
- Deleting repositories
- Production configuration changes

Ask: "This will [action]. This is [reversible/irreversible]. Should I proceed?"

## Testing Requirements

Every implementation should have corresponding tests for:

- Business logic
- Validators
- Permission checks
- Calculations
- Data transformations
- API routes
- Server actions
- Security-sensitive functions

See `skills/testing/SKILL.md` for full testing practices.

## Documentation Requirements

After implementation, update:

- Code comments for complex logic (explain why, not what)
- README if commands or setup changed
- CHANGELOG.md for user-facing changes
- Architecture docs if structure changed

## Performance Considerations

- Avoid unnecessary re-renders
- Use appropriate React patterns (memo, useMemo, useCallback)
- Lazy load when beneficial
- Optimize images and assets
- Consider bundle size impact

## Security Considerations

During implementation:

- Validate untrusted input
- Use parameterized queries
- Avoid injection vulnerabilities
- Never commit secrets
- Never expose credentials
- Validate redirects
- Secure uploads
- Use safe cookie/session practices
- Follow least privilege

For security-sensitive work, also load `skills/security/SKILL.md`.
