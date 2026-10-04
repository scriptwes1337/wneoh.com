# Design System

This document defines the visual design system for this Next.js template repository.

## Design Philosophy

Inspired by Apple's Liquid Glass design language:

- **Clarity** — Clear visual hierarchy and content prominence
- **Deference** — UI supports content, doesn't compete with it
- **Depth** — Purposeful use of visual layers and translucency

## Core Principles

### Content First

- Content is the primary focus
- UI supports rather than competes
- Whitespace is used purposefully
- Typography establishes hierarchy

### Restraint

- Glass/translucency used selectively, not everywhere
- Motion serves purpose, not decoration
- Color used meaningfully
- Avoid visual clutter

### Consistency

- Consistent spacing, typography, and patterns
- Predictable interactions
- Unified visual language

## Typography

### Font Family

Primary: Geist Sans (system default via Next.js)

```css
font-family: var(--font-geist-sans);
```

Monospace: Geist Mono (for code)

```css
font-family: var(--font-geist-mono);
```

### Type Scale

| Token       | Size            | Use Case         |
| ----------- | --------------- | ---------------- |
| `text-xs`   | 0.75rem (12px)  | Labels, captions |
| `text-sm`   | 0.875rem (14px) | Secondary text   |
| `text-base` | 1rem (16px)     | Body text        |
| `text-lg`   | 1.125rem (18px) | Large body       |
| `text-xl`   | 1.25rem (20px)  | Small headings   |
| `text-2xl`  | 1.5rem (24px)   | Headings         |
| `text-3xl`  | 1.875rem (30px) | Large headings   |
| `text-4xl`  | 2.25rem (36px)  | Display headings |

### Line Heights

- Body: `leading-relaxed` (1.625)
- Headings: `leading-tight` (1.25)

## Colors

### Base Palette

Defined in Tailwind CSS 4 configuration.

Light Mode:

- Background: `white` / `gray-50`
- Foreground: `gray-900`
- Muted: `gray-500`
- Border: `gray-200`

Dark Mode:

- Background: `gray-950`
- Foreground: `gray-50`
- Muted: `gray-400`
- Border: `gray-800`

### Semantic Colors

| Purpose   | Light       | Dark        |
| --------- | ----------- | ----------- |
| Primary   | `gray-900`  | `gray-50`   |
| Secondary | `gray-600`  | `gray-400`  |
| Success   | `green-600` | `green-400` |
| Warning   | `amber-600` | `amber-400` |
| Error     | `red-600`   | `red-400`   |
| Info      | `blue-600`  | `blue-400`  |

### Accent Color

Define per-project. Use consistently throughout the application.

## Spacing

### Scale

Based on 4px unit:

| Token | Size | Use Case              |
| ----- | ---- | --------------------- |
| `1`   | 4px  | Tight spacing         |
| `2`   | 8px  | Compact spacing       |
| `3`   | 12px | Default spacing       |
| `4`   | 16px | Comfortable spacing   |
| `6`   | 24px | Section spacing       |
| `8`   | 32px | Large section spacing |
| `12`  | 48px | Page section spacing  |
| `16`  | 64px | Major sections        |

## Layout

### Breakpoints

| Name  | Min Width | Use Case      |
| ----- | --------- | ------------- |
| `sm`  | 640px     | Large mobile  |
| `md`  | 768px     | Tablet        |
| `lg`  | 1024px    | Laptop        |
| `xl`  | 1280px    | Desktop       |
| `2xl` | 1536px    | Large desktop |

### Container Widths

- Default max width: `1280px`
- Wide content: `1440px`
- Prose content: `65ch`

## Border Radius

| Token          | Size   | Use Case        |
| -------------- | ------ | --------------- |
| `rounded`      | 4px    | Default         |
| `rounded-md`   | 6px    | Buttons, inputs |
| `rounded-lg`   | 8px    | Cards           |
| `rounded-xl`   | 12px   | Large cards     |
| `rounded-2xl`  | 16px   | Modals          |
| `rounded-full` | 9999px | Pills, avatars  |

## Shadows

Use shadows sparingly for depth.

| Token       | Use Case          |
| ----------- | ----------------- |
| `shadow-sm` | Subtle lift       |
| `shadow`    | Default elevation |
| `shadow-md` | Cards, dropdowns  |
| `shadow-lg` | Modals, dialogs   |

## Glass Materials

Used selectively for:

- Navigation bars
- Sidebars
- Floating toolbars
- Overlays
- Dialogs
- Sheets
- Menus

NOT used for:

- Main content areas
- Text-heavy regions

### Implementation

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Dark mode */
.dark .glass {
  background: rgba(0, 0, 0, 0.7);
}
```

## Components

### Buttons

- Clear hierarchy (primary, secondary, tertiary)
- Adequate touch targets (min 44x44px)
- Loading states
- Disabled states

### Forms

- Clear labels
- Validation feedback
- Error states
- Helper text

### Cards

- Used purposefully
- Consistent padding
- Clear content hierarchy

### Navigation

- Clear current location
- Logical grouping
- Responsive patterns

## Motion

### Transitions

Prefer Tailwind transitions for:

- Hover states
- Focus states
- Simple transforms

```css
transition-all duration-200
```

### Reduced Motion

Always respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Accessibility

### Contrast Ratios

- Normal text: 4.5:1 minimum (AA)
- Large text: 3:1 minimum (AA)
- Interactive elements: 3:1 minimum

### Touch Targets

- Minimum: 44x44px
- Adequate spacing between targets

### Focus Indicators

- Visible focus ring
- High contrast with background

## Responsive Rules

1. Mobile-first approach
2. Content reflows, doesn't hide
3. Touch targets scale appropriately
4. Typography scales for readability
5. Navigation adapts to screen size

## Iconography

Using lucide-react:

- Consistent stroke width
- Appropriate size for context
- Used purposefully, not decoratively

## What to Avoid

- Glass/translucency everywhere
- Excessive shadows
- Arbitrary gradients
- Meaningless decorative elements
- Visual noise
- Competing accent colors
