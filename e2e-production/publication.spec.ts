import { test, expect } from "@playwright/test";

test("production excludes developer content from the entire response payload", async ({
  request,
}) => {
  for (const url of [
    "/dev",
    "/dev/docs",
    "/dev/docs/prd",
    "/dev/docs/security",
    "/dev/docs/changelog",
  ]) {
    const response = await request.get(url);
    expect(response.status()).toBe(404);
    const body = await response.text();
    expect(body.includes("CONTENT-001")).toBe(false);
    expect(body.includes("Markdown raw HTML is escaped")).toBe(false);
    expect(body.includes("About This Interface")).toBe(false);
    expect(body.includes("Remaining audit findings")).toBe(false);
  }
});

test("production publishes real content only and serves branded metadata", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Wellesley Neoh.", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".article-card")).toHaveCount(1);
  await expect(
    page.getByRole("heading", {
      name: "I’m beginning to agentify my workflows",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://wneoh.com",
  );
  const ogUrl = await page
    .locator('meta[property="og:image"]')
    .getAttribute("content");
  const og = await request.get(
    ogUrl!.replace("https://wneoh.com", "http://localhost:3002"),
  );
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/writing/singapores-next-wave")).status()).toBe(
    404,
  );
  await page.goto("/writing/agentifying-my-workflows");
  await expect(page.locator(".reading-column")).toBeVisible();
  await expect(page.locator(".sample-notice")).toHaveCount(0);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://wneoh.com/writing/agentifying-my-workflows",
  );
  for (const url of ["/feed.xml", "/sitemap.xml"]) {
    const response = await request.get(url);
    expect(response.status()).toBe(200);
    const xml = await response.text();
    expect(xml).not.toContain("singapores-next-wave");
    expect(xml).toContain("https://wneoh.com/writing/agentifying-my-workflows");
  }
});
