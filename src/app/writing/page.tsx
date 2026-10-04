import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer } from "@/components/site/shell";
import { getArticles, formatDate } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Thoughts on technology, business, media, Singapore, and whatever else is on my mind.",
  alternates: { canonical: "/writing" },
};

export default function Writing() {
  const articles = getArticles();
  return (
    <>
      <Header />
      <main id="main" className="archive frame">
        <div className="archive-heading">
          <span className="eyebrow">Notes & perspectives</span>
          <h1>
            Writing<span className="period">.</span>
          </h1>
          <p>
            Thoughts on technology, business, media, Singapore,
            <br className="desktop-break" /> and whatever else is on my mind.
          </p>
        </div>
        <div className="archive-list">
          {articles.length ? (
            articles.map((article) => (
              <Link
                className="archive-row"
                key={article.slug}
                href={`/writing/${article.slug}`}
              >
                <div className="archive-thumbnail">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 767px) 90px, 180px"
                  />
                </div>
                <div className="archive-row-content">
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                    {article.sample && " · Sample article"}
                  </time>
                  <h2>{article.title}</h2>
                </div>
                <ArrowUpRight className="arrow" size={24} strokeWidth={1.25} />
              </Link>
            ))
          ) : (
            <p className="empty-writing">
              The first piece is on its way.{" "}
              <Link href="/feed.xml">Subscribe via RSS →</Link>
            </p>
          )}
        </div>
        <Link href="/feed.xml" className="archive-rss text-link">
          Follow the writing via RSS <ArrowUpRight size={16} />
        </Link>
      </main>
      <Footer />
    </>
  );
}
