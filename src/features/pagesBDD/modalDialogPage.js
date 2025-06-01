import { expect } from "@playwright/test";

export class ModalDialogsPage {
  constructor(page) {
    this.page = page;
  }

  async clickButtonByText(text) {
    const button = this.page.getByRole("button", { name: text });
    await button.click();
  }

  async verifyModalTitle(expectedTitle) {
    const modalTitle = await this.page.locator(".modal-title").textContent();
    expect(modalTitle).toBe(expectedTitle);
  }
}
