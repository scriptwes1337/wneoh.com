import { test, expect } from "@playwright/test";

test("reader can explore the homepage, archive and an article", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Wellesley Neoh.", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".article-card")).toHaveCount(1);
  await expect(page.locator(".brand img")).toHaveAttribute(
    "src",
    /wellesley-neoh-logo/,
  );
  await page.getByRole("link", { name: "View all posts" }).click();
  await expect(page).toHaveURL(/\/writing$/);
  await page.locator(".archive-row").first().click();
  await expect(page.locator(".reading-column")).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "I’m beginning to agentify my workflows",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".sample-notice")).toHaveCount(0);
  await page.getByRole("link", { name: "Back to writing" }).click();
  await expect(page).toHaveURL(/\/writing$/);
  expect(errors).toEqual([]);
});

test("theme persists through navigation and reload", async ({ page }) => {
  await page.goto("/");
  const initiallyDark = await page
    .locator("html")
    .evaluate((element) => element.classList.contains("dark"));
  await page
    .getByRole("button", { name: "Toggle light and dark mode" })
    .click();
  await expect(page.locator("html")).toHaveClass(
    initiallyDark ? /^((?!dark).)*$/ : /dark/,
  );
  await page.reload();
  await expect(page.locator("html")).toHaveClass(
    initiallyDark ? /^((?!dark).)*$/ : /dark/,
  );
  await page.getByRole("link", { name: "Writing", exact: true }).click();
  await expect(page.locator("html")).toHaveClass(
    initiallyDark ? /^((?!dark).)*$/ : /dark/,
  );
});

for (const width of [375, 430, 768, 1024, 1440, 1728]) {
  test(`responsive layout has no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const url of ["/", "/writing", "/writing/agentifying-my-workflows"]) {
      await page.goto(url);
      await expect(page.locator("h1")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
    }
  });
}

test("RSS and sitemap publish the real article, and unknown articles return 404", async ({
  request,
}) => {
  const feed = await request.get("/feed.xml");
  expect(feed.status()).toBe(200);
  expect(feed.headers()["content-type"]).toContain("application/rss+xml");
  const feedXml = await feed.text();
  expect(feedXml.match(/<item>/g)).toHaveLength(1);
  expect(feedXml).toContain(
    "https://wneoh.com/writing/agentifying-my-workflows",
  );
  expect(feedXml).not.toContain("singapores-next-wave");
  const sitemap = await request.get("/sitemap.xml");
  const sitemapXml = await sitemap.text();
  expect(sitemapXml).toContain(
    "https://wneoh.com/writing/agentifying-my-workflows",
  );
  expect(sitemapXml).not.toContain("singapores-next-wave");
  expect((await request.get("/writing/missing")).status()).toBe(404);
});
