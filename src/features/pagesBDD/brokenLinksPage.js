export class BrokenLinksPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.validLink = page.locator('a[href="http://demoqa.com"]');
  }

  async clickValidLink() {
    await this.validLink.click();
  }

  async getCurrentUrl() {
    return this.page.url();
  }
}
