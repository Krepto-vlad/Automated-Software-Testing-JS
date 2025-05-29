import { test, expect } from "@playwright/test";
import { ToolTipsPage } from "../src/pages";

test.describe("Tooltips scenarios", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/tool-tips", {
      waitUntil: "domcontentloaded",
    });

    await page.addInitScript(() => {
      const removeAds = () => {
        const adSelectors = [
          "iframe",
          "[id^=ad]",
          '[class*="ads"]',
          '[class*="banner"]',
        ];
        adSelectors.forEach((sel) => {
          document.querySelectorAll(sel).forEach((el) => el.remove());
        });
      };
      removeAds();
      setInterval(removeAds, 1000);
    });

    await page.addStyleTag({
      content: `
        iframe, [id^=ad], [class*="ads"], [class*="banner"] {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
        }
        html, body {
          overflow: hidden !important;
          position: relative !important;
        }
      `,
    });

    await page.evaluate(() => window.scrollTo(0, 0));
  });

  test("Hover over elements and check tooltips", async ({ page }) => {
    const toolTipsPage = new ToolTipsPage(page);

    await test.step("Check tooltip on Field", async () => {
      await toolTipsPage.hoverOn(toolTipsPage.field);
      const tooltipText = await toolTipsPage.getTooltipText(
        toolTipsPage.tooltips.field
      );
      expect(tooltipText).toBe("You hovered over the text field");
    });

    await test.step("Check tooltip on Button", async () => {
      await toolTipsPage.hoverOn(toolTipsPage.button);
      const tooltipText = await toolTipsPage.getTooltipText(
        toolTipsPage.tooltips.button
      );
      expect(tooltipText).toBe("You hovered over the Button");
    });

    await test.step('Check tooltip on "Contrary"', async () => {
      await toolTipsPage.hoverOn(toolTipsPage.link1);
      const tooltipText = await toolTipsPage.getTooltipText(
        toolTipsPage.tooltips.contrary
      );
      expect(tooltipText).toBe("You hovered over the Contrary");
    });

    await test.step('Check tooltip on "Section"', async () => {
      await toolTipsPage.hoverOn(toolTipsPage.link2);
      const tooltipText = await toolTipsPage.getTooltipText(
        toolTipsPage.tooltips.section
      );
      expect(tooltipText).toBe("You hovered over the 1.10.32");
    });
  });
});
