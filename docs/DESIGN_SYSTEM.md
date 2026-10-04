# Design system

Editorial, sparse and personal. Typography, photography and whitespace provide the hierarchy; borders separate sections without enclosing articles in cards.

## Tokens

- Light: background `#f7f6f2`, text `#232520`, secondary `#686b63`, border `#dedfd6`, muted `#eaeae3`, restrained olive `#657252`.
- Dark: background `#191b18`, text `#f0efe9`, secondary `#abada5`, border `#393d34`, muted `#292d25`, olive `#b3be9c`.
- Interface font: self-hosted at build time through Next.js Geist. Article body: Georgia / Times serif.
- Desktop identity: fluid 68–104px, weight 500, tight tracking. Section headings: 36px. Card headings: 23px. Body: 15px. Article body: 20px, 1.85 leading, max width 660px.
- Layout: max width 1280px, desktop gutters 56px, tablet 32px, mobile 20px. Hero gap 70px; card gap 28px. Common spacing steps 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80px.
- Breakpoints: 767px mobile, 1024px tablet, 1600px large desktop.

## Patterns

Supplied transparent geometric logo appears once in the navigation. Light/dark mode adapts its color using CSS inversion. Image frames are square-edged. The homepage portrait keeps its square framing and natural color at every breakpoint, with the full head-and-shoulders composition visible. Editorial cards have no enclosing border or shadow. When only one article is published, it uses a wide two-column feature layout on desktop and stacks vertically on mobile. The archive uses horizontal rules. Social profiles use rectangular 1px borders. Contact placeholders are plain non-interactive text until URLs are confirmed.

Arrows translate 3px on hover; images scale to 1.02. Transitions are 200–300ms and disabled for reduced motion. Interactive controls have visible focus and at least 44px targets. Mobile preserves the introduction next to its image in reading order, then stacks the writing entries.
