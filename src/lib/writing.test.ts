import { describe, expect, it } from "vitest";
import {
  parseArticle,
  sortPublishedArticles,
  renderMarkdown,
  escapeXml,
} from "./writing";

const source = `---
title: A thoughtful title
date: 2026-09-20
description: A short description
image: /images/city.jpg
slug: thoughtful-title
draft: false
---
## A heading

A paragraph.`;

describe("Writing content", () => {
  it("parses required metadata and Markdown body", () => {
    const post = parseArticle(source);
    expect(post.slug).toBe("thoughtful-title");
    expect(post.draft).toBe(false);
    expect(post.body).toContain("## A heading");
  });
  it("rejects missing fields, unsafe paths, invalid dates and invalid booleans", () => {
    for (const invalid of [
      source.replace("title: A thoughtful title\n", ""),
      source.replace("thoughtful-title\ndraft", "../private\ndraft"),
      source.replace("2026-09-20", "2026-02-30"),
      source.replace("/images/city.jpg", "https://example.com/a.jpg"),
      source.replace("draft: false", "draft: maybe"),
    ]) {
      expect(() => parseArticle(invalid)).toThrow();
    }
    expect(() => parseArticle("No frontmatter")).toThrow();
  });
  it("excludes drafts and future articles, and sorts newest first", () => {
    const post = parseArticle(source);
    const older = { ...post, slug: "older", date: "2026-08-01" };
    expect(
      sortPublishedArticles(
        [
          older,
          post,
          { ...post, draft: true },
          { ...post, date: "2099-01-01" },
        ],
        "2026-10-04",
      ).map((p) => p.slug),
    ).toEqual(["thoughtful-title", "older"]);
  });
  it("escapes raw HTML and blocks executable Markdown links", () => {
    const html = renderMarkdown(
      "<script>alert(1)</script>\n\n[bad](javascript:alert%281%29)\n\n[good](https://example.com)",
    );
    expect(html).not.toContain("<script>");
    expect(html).not.toContain('href="javascript:');
    expect(html).toContain('href="https://example.com"');
  });
  it("escapes XML for feed metadata", () => {
    expect(escapeXml("A & B < \"C\" > 'D'")).toBe(
      "A &amp; B &lt; &quot;C&quot; &gt; &apos;D&apos;",
    );
  });
});

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, vi } from "vitest";
import { getArticles, formatDate } from "./writing";

let fixture: string | undefined;

afterEach(() => {
  vi.restoreAllMocks();
  if (fixture) fs.rmSync(fixture, { recursive: true, force: true });
  fixture = undefined;
});

function setupContent() {
  fixture = fs.mkdtempSync(path.join(os.tmpdir(), "wneoh-writing-"));
  fs.mkdirSync(path.join(fixture, "content/writing"), { recursive: true });
  vi.spyOn(process, "cwd").mockReturnValue(fixture);
  return path.join(fixture, "content/writing");
}

describe("Publishing adapter", () => {
  it("loads trusted files and distinguishes preview from published content", () => {
    const directory = setupContent();
    fs.writeFileSync(path.join(directory, "post.md"), source);
    fs.writeFileSync(
      path.join(directory, "sample.md"),
      source.replace(
        "slug: thoughtful-title",
        "slug: sample-post\nsample: true",
      ),
    );
    fs.writeFileSync(
      path.join(directory, "draft.md"),
      source
        .replace("slug: thoughtful-title", "slug: draft-post")
        .replace("draft: false", "draft: true"),
    );
    fs.writeFileSync(
      path.join(directory, "future.md"),
      source
        .replace("slug: thoughtful-title", "slug: future-post")
        .replace("2026-09-20", "2099-09-20"),
    );
    fs.writeFileSync(path.join(directory, "ignore.txt"), "not an article");
    expect(getArticles({ preview: true }).map((p) => p.slug)).toEqual([
      "thoughtful-title",
      "sample-post",
    ]);
    expect(getArticles({ preview: false }).map((p) => p.slug)).toEqual([
      "thoughtful-title",
    ]);
    expect(getArticles().map((p) => p.slug)).toEqual(["thoughtful-title"]);
  });
  it("rejects duplicate slugs rather than publishing ambiguous URLs", () => {
    const directory = setupContent();
    fs.writeFileSync(path.join(directory, "one.md"), source);
    fs.writeFileSync(path.join(directory, "two.md"), source);
    expect(() => getArticles()).toThrow("Duplicate article slug");
  });
  it("supports quoted values, CRLF, image alternatives and publishing flags", () => {
    const post = parseArticle(
      source
        .replace("title: A thoughtful title", 'title: "A thoughtful title"')
        .replace("draft: false", "draft: true\nsample: true\nimageAlt: A city")
        .replaceAll("\n", "\r\n"),
    );
    expect(post).toMatchObject({
      title: "A thoughtful title",
      imageAlt: "A city",
      draft: true,
      sample: true,
    });
    expect(() =>
      parseArticle(
        source.replace("draft: false", "draft: false\nsample: maybe"),
      ),
    ).toThrow("Invalid article flag");
    expect(() => parseArticle(source.replace("2026-09-20", "invalid"))).toThrow(
      "Invalid article date",
    );
    expect(() =>
      parseArticle(source.replace("2026-09-20", "2026-99-99")),
    ).toThrow("Invalid article date");
  });
  it("renders headings and safe links with escaped attributes", () => {
    expect(
      renderMarkdown(
        '## Heading\n\n[Good](https://example.com "An & example")\n\n![Description](/images/image.jpg)',
      ),
    ).toContain("<h2>Heading</h2>");
    expect(
      renderMarkdown('[Good](https://example.com "An & example")'),
    ).toContain('title="An &amp; example"');
    expect(renderMarkdown("![Description](/images/image.jpg)")).toContain(
      "Description",
    );
    expect(renderMarkdown("[Bad](//example.com)")).not.toContain("href=");
    expect(renderMarkdown("[Internal](/writing)")).toContain('href="/writing"');
    expect(formatDate("2026-09-20")).toBe("20 September 2026");
  });
});

import { GET } from "@/app/feed.xml/route";
import sitemap from "@/app/sitemap";

describe("Published syndication", () => {
  it("includes published articles with escaped XML, canonical URLs and correct dates", async () => {
    const directory = setupContent();
    fs.writeFileSync(
      path.join(directory, "post.md"),
      source.replace("A thoughtful title", "A & B < C"),
    );
    const response = GET();
    const xml = await response.text();
    expect(xml).toContain("<title>A &amp; B &lt; C</title>");
    expect(xml).toContain(
      "<link>https://wneoh.com/writing/thoughtful-title</link>",
    );
    expect(xml).toContain("<pubDate>Sat, 19 Sep 2026 16:00:00 GMT</pubDate>");
    expect(sitemap()).toContainEqual({
      url: "https://wneoh.com/writing/thoughtful-title",
      lastModified: new Date("2026-09-20"),
      priority: 0.6,
    });
  });
});
