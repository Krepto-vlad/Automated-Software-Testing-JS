import { BasePage } from "./index.js";

export default class ToolTipsPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.button = page.locator("#toolTipButton");
    this.field = page.locator("#toolTipTextField");
    this.link1 = page.locator("#texToolTopContainer a", { hasText: "Contrary"});
    this.link2 = page.locator("#texToolTopContainer a", { hasText: "1.10.32" });

    this.tooltips = {
      button: page.locator("#buttonToolTip"),
      field: page.locator("#textFieldToolTip"),
      contrary: page.locator("#contraryTexToolTip"),
      section: page.locator("#sectionToolTip"),
    };
  }

  async hoverOn(element) {
    const box = await element.boundingBox();
    await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await element.hover();
  }

  async getTooltipText(tooltipLocator) {
    await tooltipLocator.waitFor({ state: "visible" });
    return (await tooltipLocator.textContent()).trim();
  }
}
