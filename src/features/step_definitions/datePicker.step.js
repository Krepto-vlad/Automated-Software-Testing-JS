import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(20 * 1000);

Given("I open the date picker page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/date-picker", { waitUntil: "load" });
});
//TODO Rewrite using dropdowns for month and year, clicking on date 
When("I select the date {string}", async function (date) {
  const dateInput = this.page.locator("#datePickerMonthYearInput");
  await dateInput.fill("");
  await dateInput.type(date);
  await dateInput.press("Enter");
});

Then("the selected date should be {string}", async function (expectedDate) {
  const value = await this.page
    .locator("#datePickerMonthYearInput")
    .inputValue();
  expect(value).toBe(expectedDate);
  await this.close();
});
