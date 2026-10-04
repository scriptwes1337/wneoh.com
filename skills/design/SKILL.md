# Design Skill

This skill governs UI/UX development, ensuring clean, polished, and intentional interfaces.

## Design Philosophy

Inspired by Apple's Liquid Glass design language:

- Clear visual hierarchy
- Content-first approach
- Strong alignment and spacing
- Restrained use of glass/translucency
- Purposeful depth and motion
- Excellent typography
- Strong accessibility
- Minimal visual noise

## Core Principles

1. **Clean** — Remove unnecessary elements
2. **Restrained** — Avoid excessive decoration
3. **Polished** — Attention to spacing, alignment, typography
4. **Coherent** — Consistent patterns throughout
5. **Responsive** — Works at all viewport sizes
6. **Accessible** — Usable by everyone

## What to Avoid

### Stereotypical AI-Generated UI

Do NOT default to:

- Arbitrary gradient blobs
- Excessive glass cards on everything
- Every section inside a card
- Endless pill/badge elements
- Excessive border radii
- Gratuitous shadows everywhere
- Meaningless dashboard charts
- Random colorful icons
- Excessive floating elements
- Generic startup hero layouts
- Oversized empty hero sections
- Excessive centered layouts
- Repeated three-card grids without reason
- Gratuitous decorative gradients
- Excessive motion
- Glowing borders
- Unnecessary neon accents
- Multiple competing accent colors
- Generic copy patterns
- Decorative UI that reduces usability

### Glass Material Misuse

Do NOT interpret "Liquid Glass" as `backdrop-blur` everywhere.

Glass materials should be used selectively:

**Appropriate uses:**
- Navigation
- Sidebars
- Floating toolbars
- Contextual controls
- Overlays
- Dialogs
- Sheets
- Menus
- Selected interactive surfaces

**Not appropriate:**
- Main content areas
- Text-heavy regions
- Primary content backgrounds

Content should remain visually dominant.

## Design System

Follow `docs/DESIGN_SYSTEM.md` as the source of truth for:

- Typography scale
- Spacing scale
- Color palette
- Border radii
- Shadows
- Motion
- Breakpoints

Do not invent new values without documenting them.

## Typography

- Use the defined type scale
- Maintain hierarchy (H1 > H2 > H3 > body)
- Ensure readable line lengths (45-75 characters)
- Use appropriate line heights
- Consider font weight for emphasis

## Spacing

- Use consistent spacing scale (4px base recommended)
- Group related elements
- Separate distinct sections
- Use whitespace purposefully
- Don't fear whitespace

## Color

- Primary palette for brand
- Semantic colors (success, warning, error)
- Appropriate contrast ratios
- Dark mode support where applicable
- Avoid color as the only indicator

## Layout

- Use consistent grid/column system
- Define max widths for content
- Maintain consistent gutters
- Consider reading patterns
- Align elements purposefully

## Responsive Design

### Viewport Sizes to Test

- 375px (mobile)
- 430px (mobile)
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop)
- 1728px (large desktop)

### What to Check

- Navigation
- Forms
- Tables
- Cards
- Text wrapping
- Overflow
- Dialogs/Sheets
- Typography scale
- Touch targets (min 44x44px)
- Spacing proportion
- Sticky elements
- Sidebars
- Loading states
- Error states
- Empty states

Do NOT treat desktop rendering as sufficient validation.

## Accessibility

Follow WCAG 2.1 AA minimum:

### Required

- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Sufficient contrast (4.5:1 for text)
- Form labels associated with inputs
- Accessible names for interactive elements
- Logical heading hierarchy
- Minimum touch target size (44x44px)

### Verify

- Modal focus management
- Reduced-motion preference respected
- Screen reader semantics where applicable
- No color-only indicators

Do NOT sacrifice accessibility for visual effects.

## Component Patterns

### Buttons

- Clear visual hierarchy (primary, secondary, tertiary)
- Appropriate size for action importance
- Disabled state is visually distinct
- Loading state is clear
- Touch target size adequate

### Forms

- Labels visible and associated
- Validation feedback clear
- Error states prominent
- Required indicators clear
- Helper text available

### Cards

- Used purposefully, not everywhere
- Consistent padding and radius
- Clear content hierarchy
- Actions clearly identified

### Navigation

- Clear current location
- Logical grouping
- Mobile-appropriate patterns
- Consistent interaction model

### Dialogs/Sheets

- Clear purpose stated
- Actions clearly labeled
- Escape to close
- Focus trapped appropriately
- Background scroll locked

## Motion

Use motion purposefully:

**Appropriate:**
- State transitions
- Layout changes
- Drawing attention
- Providing feedback
- Orientation changes

**Avoid:**
- Motion for decoration
- Excessive animations
- Motion that slows users
- Motion that distracts

Prefer Tailwind transitions for:
- Hover states
- Focus states
- Opacity changes
- Minor transforms
- Basic micro-interactions

Use Motion (Framer Motion) for:
- Complex orchestrations
- Layout animations
- Gesture-based interactions
- Significant state transitions

## Visual Verification Workflow

When UI changes are made:

1. Run the application
2. Open affected interface
3. Exercise affected workflow
4. Inspect at multiple viewport widths
5. Check for visual issues
6. Check for console errors
7. Check for accessibility issues
8. Fix issues
9. Repeat

Use Chrome DevTools MCP or agent-browser for inspection.

Do NOT claim visual verification occurred unless it actually occurred.

## Documentation

Update `docs/DESIGN_SYSTEM.md` when:
- New patterns are established
- Color palette changes
- Typography changes
- Spacing scale changes
- New component patterns emerge
