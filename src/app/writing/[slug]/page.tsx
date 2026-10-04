import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header, Footer } from "@/components/site/shell";
import { getArticles, formatDate, renderMarkdown } from "@/lib/writing";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticles().find((article) => article.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/writing/${slug}` },
    robots: article.sample ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${site.url}/writing/${slug}`,
      publishedTime: article.date,
      authors: [site.name],
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticles().find((article) => article.slug === slug);
  if (!article) notFound();
  return (
    <>
      <Header />
      <main id="main" className="article-page frame">
        <div className="article-heading">
          <Link className="text-link" href="/writing">
            <ArrowLeft size={16} /> Back to writing
          </Link>
          <div className="article-date">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>Wellesley Neoh</span>
          </div>
          <h1>{article.title}</h1>
          <p className="article-deck">{article.description}</p>
          {article.sample && (
            <p className="sample-notice">
              Sample article for layout preview. This is illustrative text, not
              a published piece by Wellesley Neoh.
            </p>
          )}
        </div>
        <div className="article-hero-image">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1100px"
          />
        </div>
        <div
          className="reading-column"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.body) }}
        />
        <div className="article-end">
          <span>Thanks for reading.</span>
          <Link className="text-link" href="/writing">
            More writing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
