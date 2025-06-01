import { expect } from "@playwright/test";

export class DatePickerPage {
  constructor(page) {
    this.page = page;
    this.dateInput = page.locator("#datePickerMonthYearInput");
  }

  async setDate(date) {
    await this.dateInput.fill("");
    await this.dateInput.type(date);
    await this.dateInput.press("Enter");
  }

  async verifyDate(expectedDate) {
    const value = await this.dateInput.inputValue();
    expect(value).toBe(expectedDate);
  }
}
