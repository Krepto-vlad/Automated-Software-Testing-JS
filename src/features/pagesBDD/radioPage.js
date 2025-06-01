import { expect } from "@playwright/test";

export class RadioPage {
  constructor(page) {
    this.page = page;
  }

  async selectRadio(option) {
    const label = this.page.locator(`label:has-text("${option}")`);
    await label.waitFor({ state: "visible" });
    await label.click();
  }

  async verifyResult(expected) {
    const result = await this.page.locator(".text-success").textContent();
    expect(result).toBe(expected);
  }
}
