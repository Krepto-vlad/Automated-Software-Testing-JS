import { When, Then } from "@cucumber/cucumber";
import { DatePickerPage } from "../pagesBDD/datePicker.js";

When("I select the date {string}", async function (date) {
  this.datePickerPage = new DatePickerPage(this.page);
  await this.datePickerPage.setDate(date);
});

Then("the selected date should be {string}", async function (expectedDate) {
  await this.datePickerPage.verifyDate(expectedDate);
  await this.close();
});
