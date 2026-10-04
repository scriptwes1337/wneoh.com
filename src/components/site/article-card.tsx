import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Article, formatDate } from "@/lib/writing";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article className="article-card">
      <Link href={`/writing/${article.slug}`} className="article-card-link">
        <div className="article-image">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes={
              featured
                ? "(max-width: 767px) 100vw, 50vw"
                : "(max-width: 767px) 100vw, 33vw"
            }
          />
          {article.sample && (
            <span className="sample-label">Sample article</span>
          )}
        </div>
        <div className="article-meta">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <ArrowUpRight className="arrow" size={18} strokeWidth={1.5} />
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </Link>
    </article>
  );
}
