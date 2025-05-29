import { test } from "@playwright/test";
import AlertsPage from "../src/pages/AlertsPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/alerts", {
    waitUntil: "domcontentloaded",
  });
});

test("Alerts scenarios", async ({ page }) => {
  const alertsPage = new AlertsPage(page);
  await test.step("check alert", async () => {
    page.on("dialog", async (dialog) => {
      console.log("Confirm message: ", dialog.message());
      await dialog.accept();
    });
    await alertsPage.clickButton("confirmButton");
  });
});
