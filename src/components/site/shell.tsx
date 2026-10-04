import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, socialLinks } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { SocialIcon } from "./social-icon";

export function Header() {
  return (
    <header className="site-header frame">
      <Link className="brand" href="/" aria-label="Wellesley Neoh — home">
        <Image src={site.logo} alt="" width={64} height={64} priority />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/writing">Writing</Link>
        <Link href="/#links">Links</Link>
        <span className="nav-divider" />
        <ThemeToggle />
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer frame">
      <span>© {new Date().getUTCFullYear()} Wellesley Neoh</span>
      <span>
        Singapore <span className="footer-dot">·</span> On the internet, since
        always.
      </span>
      <Link href="/feed.xml">
        RSS <ArrowUpRight size={13} />
      </Link>
    </footer>
  );
}

export function SocialIcons() {
  return (
    <div className="social-icons" role="group" aria-label="Social profiles">
      {socialLinks.map((link) =>
        link.href ? (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            target={link.name === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <SocialIcon name={link.name} />
          </a>
        ) : (
          <span
            key={link.name}
            className="unconfirmed-social"
            role="img"
            aria-label={`${link.name} — profile coming soon`}
            title={`${link.name} — profile coming soon`}
          >
            <SocialIcon name={link.name} />
          </span>
        ),
      )}
    </div>
  );
}

export function Elsewhere() {
  return (
    <section id="links" className="elsewhere frame">
      <div className="elsewhere-heading">
        <span className="eyebrow">Around the internet</span>
        <h2>
          Find me elsewhere<span className="period">.</span>
        </h2>
        <p>A few other corners of the internet I call home.</p>
      </div>
      <div className="elsewhere-links">
        {socialLinks.map((link) =>
          link.href ? (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              <SocialIcon name={link.name} />
              <span>{link.name}</span>
              <ArrowUpRight size={16} className="arrow" />
            </a>
          ) : (
            <div key={link.name} className="pending-profile">
              <SocialIcon name={link.name} />
              <span>{link.name}</span>
              <span className="pending-label">Coming soon</span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
