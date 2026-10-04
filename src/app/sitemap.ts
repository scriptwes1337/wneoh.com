import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/writing";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/writing`, priority: 0.8 },
    ...getArticles({ preview: false }).map((article) => ({
      url: `${site.url}/writing/${article.slug}`,
      lastModified: new Date(article.date),
      priority: 0.6,
    })),
  ];
}
