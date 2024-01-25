import { test, takeSnapshot } from "chromatic-playwright";

test('Website', async ({ page }, testInfo) => {
  await page.goto('https://nishmithas.website3.me/');

  await takeSnapshot(page, testInfo);
});