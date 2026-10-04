import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getDocBySlug, getDocContent, docs } from "@/lib/docs";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (process.env.NODE_ENV === "production") return [];
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  if (process.env.NODE_ENV === "production") notFound();
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: "Not Found" };
  return { title: `${doc.title} | Documentation` };
}

export default async function DocPage({ params }: PageProps) {
  if (process.env.NODE_ENV === "production") notFound();
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const content = getDocContent(doc.filePath);
  const html = await marked(content);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center gap-4 px-6">
          <Link
            href="/dev"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Documentation
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">{doc.title}</span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </div>
  );
}
