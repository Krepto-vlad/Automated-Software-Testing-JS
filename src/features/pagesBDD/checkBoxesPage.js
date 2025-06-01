import { expect } from "@playwright/test";

export class CheckboxPage {
  constructor(page) {
    this.page = page;
  }

  async expandAll() {
    await this.page.click(".rct-option-expand-all");
  }

  async selectCheckbox(name) {
    await this.page.locator(`label span:has-text("${name}")`).click();
  }

  async verifyCheckboxSelected(name) {
    const selected = await this.page.locator("#result").textContent();
    const normalizedExpected = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    expect(selected.toLowerCase()).toContain(normalizedExpected);
  }
}
