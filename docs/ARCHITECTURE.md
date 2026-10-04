# Architecture

Next.js App Router, TypeScript and Tailwind CSS. Public routes are `/`, `/writing`, `/writing/[slug]`, `/feed.xml`, `/sitemap.xml` and `/robots.txt`. Server components render the publication. The theme button is the only publication client component.

`src/lib/site.ts` holds identity, assets and profile links. `src/components/site/` contains the shared header, footer, profiles, theme control and article card. `src/lib/writing.ts` provides a typed content adapter, validates constrained frontmatter, filters publishing state and renders safe Markdown with the existing marked dependency. A future CMS can replace `getArticles` while preserving the Article contract.

Content lives in `content/writing/*.md`. Slugs are validated and matched against the article collection rather than interpolated into filesystem paths. Duplicate slugs fail explicitly. Drafts, future dates and development samples are excluded from public production content. Feed and sitemap always request production content. Static outputs require a rebuild to publish a new piece or scheduled post.

Assets are local under `public/images/` and use responsive Next Image sizing. The original supplied logo remains untouched in the project root and is copied into public assets. Open Graph output embeds this mark using next/og.

The theme boot script applies saved or system preference before rendering, preventing a theme flash. It contains no untrusted input. Storage denial does not disable the toggle. Developer documentation at `/dev` is accessible locally but returns 404 in production. Guards run in both layouts and individual pages before content reads, preventing child content from being serialized into Next.js response payloads.
