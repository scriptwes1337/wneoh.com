import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./e2e-production",
  use: { baseURL: "http://localhost:3002", ...devices["Desktop Chrome"] },
  webServer: {
    command: "npm run start -- --port 3002",
    url: "http://localhost:3002",
    reuseExistingServer: !process.env.CI,
  },
});
