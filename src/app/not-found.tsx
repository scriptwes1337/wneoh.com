import Link from "next/link";
import { Header, Footer } from "@/components/site/shell";
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="archive frame">
        <div className="archive-heading">
          <span className="eyebrow">404 / Not found</span>
          <h1>
            A missing page<span className="period">.</span>
          </h1>
          <p>This page may have moved, or the piece has yet to be published.</p>
          <Link href="/writing" className="text-link">
            Back to writing →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
