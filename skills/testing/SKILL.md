# Testing Skill

Testing is a first-class development discipline. This skill governs testing practices.

## Core Principles

1. **Test-driven development** — Write tests before implementation for functional behaviour
2. **Meaningful coverage** — Target 95-100% for critical logic
3. **Never weaken tests** — Fix the code, not the test
4. **Regression protection** — Bug fixes get regression tests
5. **Traceability** — Link tests to requirements where useful

## TDD Cycle

```
Requirement
→ Acceptance Criteria
→ Failing Test
→ Implementation
→ Passing Test
→ Refactor
→ Regression Suite
```

## Test Stack

This project uses:

- **Vitest** — Unit and component testing
- **React Testing Library** — React component testing
- **Playwright** — End-to-end testing
- **Coverage** — Via Vitest coverage

## Commands

```bash
npm run test           # Run all unit tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with coverage report
npm run test:e2e       # Run Playwright E2E tests
```

## What to Test

### Always Test

- Business logic
- Validators
- Parsers
- Permission rules
- Authentication behaviour
- Calculations
- Transformations
- Workflow transitions
- API routes
- Server actions
- Database logic
- Security-sensitive functions
- Bug fixes (regression tests)

### Test When Practical

- Component behaviour
- User interactions
- Form validation
- State management
- Error handling

### Skip Testing

- Framework boilerplate
- Generated code
- Trivial wrappers
- Styling-only files

## Coverage Policy

**Target:** 95-100% meaningful coverage for testable critical logic.

Priority areas for near 100% coverage:

- Business rules
- Permission checks
- Calculations
- Validators
- Parsers
- Data transformations
- API behaviour
- Workflow logic
- Security-sensitive logic

Do not create meaningless tests solely for literal 100% coverage.

## Test Organization

```
src/
├── __tests__/           # Unit tests
│   ├── unit/
│   └── integration/
├── components/
│   └── __tests__/       # Component tests co-located
└── e2e/                 # Playwright E2E tests
```

## Naming Conventions

```
Component.test.tsx       # Component tests
utility.test.ts          # Unit tests
feature.spec.ts          # E2E tests
```

## Test Structure

```typescript
describe('Feature or Component', () => {
  describe('specific behaviour', () => {
    it('should do something specific', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

## Requirement Traceability

Link tests to requirements:

```
// PAY-004: Commission calculation

describe('PAY-004: Commission calculation', () => {
  // PAY-004-T01: Base rate calculation
  it('calculates base commission rate', () => {...});
  
  // PAY-004-T02: Tiered rates
  it('applies tiered commission rates', () => {...});
  
  // PAY-004-T03: Minimum threshold
  it('enforces minimum commission threshold', () => {...});
});
```

## Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## E2E Testing

```typescript
import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'user@example.com');
  await page.fill('[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
});
```

## Anti-Patterns

Never:

- Delete a valid test because new code breaks it
- Weaken a valid assertion to obtain passing suite
- Skip tests to make CI green
- Exclude meaningful logic to inflate coverage
- Mock everything so tests become meaningless
- Test implementation details instead of behaviour

## Continuous Integration

All tests must pass before merge:

1. Unit tests
2. Coverage threshold met
3. E2E tests (for affected flows)
4. No regressions

## Coverage Reports

Coverage reports generated in `coverage/` directory.

Review coverage after each significant change to identify gaps.
