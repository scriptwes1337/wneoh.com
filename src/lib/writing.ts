import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";

export interface Article {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  draft: boolean;
  sample: boolean;
  body: string;
}

export function parseArticle(source: string): Article {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Article requires frontmatter");
  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator > 0)
      fields[line.slice(0, separator).trim()] = line
        .slice(separator + 1)
        .trim()
        .replace(/^(["'])(.*)\1$/, "$2");
  }
  for (const field of [
    "title",
    "date",
    "description",
    "image",
    "slug",
    "draft",
  ]) {
    if (!fields[field]) throw new Error(`Missing article field: ${field}`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fields.slug))
    throw new Error("Invalid article slug");
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(fields.date) ||
    !Number.isFinite(Date.parse(fields.date)) ||
    new Date(fields.date).toISOString().slice(0, 10) !== fields.date
  )
    throw new Error("Invalid article date");
  if (!/^\/images\/[a-zA-Z0-9_-]+\.(jpg|jpeg|png|webp|svg)$/.test(fields.image))
    throw new Error("Article image must be local");
  if (
    !["true", "false"].includes(fields.draft) ||
    (fields.sample && !["true", "false"].includes(fields.sample))
  )
    throw new Error("Invalid article flag");
  return {
    title: fields.title,
    date: fields.date,
    description: fields.description,
    image: fields.image,
    imageAlt: fields.imageAlt || "",
    slug: fields.slug,
    draft: fields.draft === "true",
    sample: fields.sample === "true",
    body: match[2].trim(),
  };
}

export function sortPublishedArticles(
  articles: Article[],
  today = new Date().toISOString().slice(0, 10),
): Article[] {
  return articles
    .filter((post) => !post.draft && !post.sample && post.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticles({
  preview = process.env.NODE_ENV === "development",
} = {}): Article[] {
  const directory = path.join(process.cwd(), "content/writing");
  const articles = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) =>
      parseArticle(fs.readFileSync(path.join(directory, file), "utf8")),
    );
  const slugs = new Set<string>();
  for (const post of articles) {
    if (slugs.has(post.slug))
      throw new Error(`Duplicate article slug: ${post.slug}`);
    slugs.add(post.slug);
  }
  return preview
    ? articles
        .filter(
          (post) =>
            !post.draft && post.date <= new Date().toISOString().slice(0, 10),
        )
        .sort((a, b) => b.date.localeCompare(a.date))
    : sortPublishedArticles(articles);
}

export function escapeXml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[character]!,
  );
}

const markdown = new Marked({
  renderer: {
    html({ text }) {
      return escapeXml(text);
    },
    link({ href, title, tokens }) {
      const label = this.parser.parseInline(tokens);
      if (!/^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(href)) return label;
      return `<a href="${escapeXml(href)}"${title ? ` title="${escapeXml(title)}"` : ""}>${label}</a>`;
    },
    image({ text }) {
      return escapeXml(text);
    },
  },
});

export function renderMarkdown(body: string): string {
  return markdown.parse(body, { async: false });
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Singapore",
  }).format(new Date(`${date}T00:00:00Z`));
}
