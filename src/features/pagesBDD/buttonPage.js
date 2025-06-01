export class ButtonsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async doubleClickButton(buttonText) {
    const button = this.page.locator('button', { hasText: buttonText });
    await button.dblclick();
  }

  async getDoubleClickMessage() {
    return this.page.locator('#doubleClickMessage').textContent();
  }
}
