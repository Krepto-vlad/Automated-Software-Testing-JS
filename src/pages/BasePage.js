export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async clickOnButton(name) {
    await this.page.getByRole("button", { name }).click();
  }

  locator(selector) {
    return this.page.locator(selector);
  }

  async navigate(path) {
    await this.page.goto(`https://demoqa.com${path}`, {
      waitUntil: "domcontentloaded",
    });
  }
}
 