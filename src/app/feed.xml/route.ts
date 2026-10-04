import { escapeXml, getArticles } from "@/lib/writing";
import { site } from "@/lib/site";
export const dynamic = "force-static";
export function GET() {
  const items = getArticles({ preview: false })
    .map(
      (article) =>
        `<item><title>${escapeXml(article.title)}</title><link>${site.url}/writing/${article.slug}</link><guid isPermaLink="true">${site.url}/writing/${article.slug}</guid><description>${escapeXml(article.description)}</description><pubDate>${new Date(`${article.date}T00:00:00+08:00`).toUTCString()}</pubDate></item>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Wellesley Neoh — Writing</title><link>${site.url}/writing</link><description>${escapeXml(site.description)}</description><language>en-SG</language><atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
