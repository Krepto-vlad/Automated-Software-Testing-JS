export class AccordionPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sectionHeading = (title) =>
      this.page.locator('#section1Heading', { hasText: title });
    this.sectionContent = this.page.locator('#section1Content');
  }

  async expandSection(title) {
    await this.sectionHeading(title).click();
  }

  async isContentVisible() {
    return this.sectionContent.isVisible();
  }

  async getContentTextLength() {
    const text = await this.sectionContent.textContent();
    return text?.length ?? 0;
  }
}
