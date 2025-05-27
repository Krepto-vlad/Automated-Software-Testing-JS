export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async clickOnButton(name) {
    await this.page.getByRole('button', { name }).click();
  }
}