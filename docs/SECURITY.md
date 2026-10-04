# Security

The public publication has no login, privileged actions, forms, database or secrets. Content changes are trusted repository operations. Public routes only read a fixed content directory.

Markdown raw HTML is escaped, Markdown images are rendered as text, and links must use HTTP(S), mailto, a local path or an anchor. Frontmatter accepts constrained local image paths, valid calendar dates, boolean publishing flags and safe slugs. Slugs are looked up in the collection, never used to construct a file path. RSS metadata is XML-escaped.

Developer documentation returns 404 in production and is excluded from search indexing. Security reports are never routed through the documentation interface. Responses include nosniff, frame denial, a strict referrer policy and disabled camera, microphone and geolocation permissions. Outbound links use noopener and noreferrer.

Theme preference is the only browser storage. Dependency audits and the complete pre-push gate are required before release. See `security-reports/2026-10-04-publication.md` for actual audit findings and verification outcomes.

Next ESLint's fast-glob dependency is overridden with `tools/next-lint-glob`, a constrained adapter backed by pinned tinyglobby 0.2.17. It preserves absolute/relative directory paths and supports only the plugin's directory-matching call. Compatibility tests must pass when upgrading the plugin. The unused shadcn CLI and stylesheet import were removed to eliminate their vulnerable dependency chain.
