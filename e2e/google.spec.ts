import { test, expect } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("https://www.google.com");
});
