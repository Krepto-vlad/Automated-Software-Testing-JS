import { BasePage } from "./index";

export class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async navigate() {
    await super.navigate("/select-menu");
  }

  async completeSelectMenuActions() {
    await this.page.addInitScript(() => {
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

    await this.page.waitForTimeout(2000);

    await this.locator("#withOptGroup svg").click();
    await this.page.getByText("Group 2, option 1", { exact: true }).click();

    await this.locator("#selectOne svg").click();
    await this.page.getByText("Other", { exact: true }).click();

    await this.locator("#oldSelectMenu").selectOption("Green");

    await this.locator("#selectMenuContainer svg").nth(2).click();

    const black = this.locator("#react-select-4-option-0");
    await black.waitFor({ state: "visible", timeout: 3000 });
    await black.click();
    await this.page.waitForTimeout(300);

    const blue = this.locator("#react-select-4-option-1");
    await blue.waitFor({ state: "visible", timeout: 3000 });
    await blue.click();
    await this.page.waitForTimeout(300);

    await this.locator("#cars").selectOption("audi");
  }
}
