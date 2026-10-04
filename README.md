# wneoh.com

Wellesley Neoh's personal editorial publication, built with Next.js, TypeScript and Tailwind CSS.

## Run locally

Use Node.js 24. Install with `npm ci`, then `npm run dev` and open the URL shown by Next.js. `npm run build` and `npm run start` run the production site. `npm run pre-push` runs unit tests, typecheck, lint, build and dependency audit. `npm run test:e2e` checks reader journeys and responsive layouts. `npm run test:production` builds and verifies production publishing and developer-route protection. Set `PLAYWRIGHT_BASE_URL` to test an existing server on another port.

## Publish writing

Add `content/writing/your-slug.md`:

```markdown
---
title: Your headline
date: 2026-10-04
description: A short introduction.
image: /images/your-image.jpg
imageAlt: Describe the image when it adds meaning.
slug: your-slug
draft: false
---
Your Markdown article body.
```

Copy images to `public/images`. Required fields are validated at build time. Drafts and future posts are excluded. Rebuild to publish. Raw HTML is escaped; safe Markdown links, headings, lists, quotes and code are supported. Development sample posts have `sample: true` and never appear in production, RSS or the sitemap. The initial sample posts have been replaced by “I’m beginning to agentify my workflows.”

## Assets and profiles

Edit `src/lib/site.ts` to add confirmed social URLs or email. The supplied logo and the approved square head-and-shoulders portrait are included. The homepage uses `public/images/wellesley-neoh-portrait-v1.png`; editorial thumbnails are original SVG illustrations. Contact information is intentionally placeholder text at the user's request. `/dev` exposes repository documentation in development only.

Product requirements, design tokens, architecture and security notes live in `docs/`.

Next's lint directory matcher uses the scoped adapter in `tools/next-lint-glob`, backed by tinyglobby, to avoid the unpatched braces dependency. Integration tests verify directory matching compatibility. The unused shadcn CLI and its CSS import have been removed.

## Deployment

GitHub `scriptwes1337/wneoh.com` is linked to Vercel project `wneoh-com` in team `scriptwes-projects`. Pushes to `main` update production. Cloudflare manages the domain's DNS: apex and www are DNS-only CNAME records pointing to `1869ed4accda1ac0.vercel-dns-016.com`, with apex flattening handled by Cloudflare. Vercel serves HTTPS at `https://wneoh.com`; www uses a 308 redirect to the apex and preserves the request path. Preserve all existing iCloud mail DNS records when changing web hosting.
