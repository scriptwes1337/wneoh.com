import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { getArticles } from "@/lib/writing";
import {
  Header,
  Footer,
  SocialIcons,
  Elsewhere,
} from "@/components/site/shell";
import { ArticleCard } from "@/components/site/article-card";

export default function Home() {
  const articles = getArticles().slice(0, 3);
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero frame">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="location-dot" /> Singapore · {site.handle}
            </div>
            <h1>
              Wellesley
              <br />
              Neoh<span className="period">.</span>
            </h1>
            <p className="hero-position">
              Technology entrepreneur
              <br className="desktop-break" /> based in Singapore.
            </p>
            <p className="hero-description">
              I build software, internet businesses, and media projects, and
              write about technology, business, media, and current affairs in
              Singapore.
            </p>
            <SocialIcons />
          </div>
          <figure className="hero-figure">
            <div className="hero-photo">
              <Image
                src={site.portrait}
                alt={site.portraitAlt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 48vw"
              />
            </div>
            <figcaption>
              <span>{site.portraitCaption}</span>
              <span>01 / SINGAPORE</span>
            </figcaption>
          </figure>
        </section>
        <section className="latest frame">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Notes & perspectives</span>
              <h2>
                Latest writing<span className="period">.</span>
              </h2>
            </div>
            <Link className="text-link" href="/writing">
              View all posts <ArrowRight size={17} className="arrow" />
            </Link>
          </div>
          {articles.length ? (
            <div
              className={`article-grid${articles.length === 1 ? " article-grid-single" : ""}`}
            >
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  featured={articles.length === 1}
                />
              ))}
            </div>
          ) : (
            <p className="empty-writing">
              New perspectives are on their way.{" "}
              <Link href="/feed.xml">Follow along via RSS →</Link>
            </p>
          )}
        </section>
        <Elsewhere />
      </main>
      <Footer />
    </>
  );
}
