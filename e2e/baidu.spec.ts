import { test as setup, expect } from "@playwright/test";

setup("example", async ({ page }) => {
  await page.goto("https://www.baidu.com");
});
