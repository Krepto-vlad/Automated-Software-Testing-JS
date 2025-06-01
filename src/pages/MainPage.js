import BasePage from "./BasePage.js";

export default class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.headerLocator = page.locator("header");
    this.categoryCardLocator = (category) =>
      page.locator(
        `//div[@class="card-body"]//*[contains(text(), "${category}")]`
      );
    this.expandedGroupLocator = (group) =>
      page.locator(
        `//div[contains(@class, "show")]//preceding-sibling::span//*[contains(text(), "${group}")]`
      );
    this.listElement = (element) =>
      page.locator(`//span[contains(text(), "${element}")]`);
    this.sectionHeaderLocator = (header) =>
      page.locator(`//h1[contains(text(), "${header}")]`);
  }

  async clickCategoryCard(category) {
    const card = this.categoryCardLocator(category);
    await card.waitFor({ state: "visible" });
    await card.click();
  }

  async clickOnElementInCardList(element) {
    const elementInList = this.listElement(element);
    await elementInList.waitFor({ state: "visible" });
    await elementInList.click();
  }

  async checkCategoryCards(cardNames) {
    for (const cardName of cardNames) {
      const card = this.cardLocator(cardName);
      await expect(card).toBeVisible();
      console.log(`Card "${cardName}" is visible.`);
    }
  }
}
