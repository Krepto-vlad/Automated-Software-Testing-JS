import { expect } from "@playwright/test";

export class TextBoxPage {
  constructor(page) {
    this.page = page;
  }

  async fillForm({ name, email, currentAddress, permanentAddress }) {
    await this.page.fill("#userName", name);
    await this.page.fill("#userEmail", email);
    await this.page.fill("#currentAddress", currentAddress);
    await this.page.fill("#permanentAddress", permanentAddress);
    await this.page.click("#submit");
  }

  async verifyOutput({ name, email }) {
    const nameOutput = await this.page.locator("#name").textContent();
    const emailOutput = await this.page.locator("#email").textContent();
    expect(nameOutput).toContain(name);
    expect(emailOutput).toContain(email);
  }
}
