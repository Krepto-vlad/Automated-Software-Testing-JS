import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I open the text box page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/text-box");
});

When(
  "I fill in the form with name {string}, email {string}, current address {string}, and permanent address {string}",
  async function (name, email, currentAddress, permanentAddress) {
    await this.page.fill("#userName", name);
    await this.page.fill("#userEmail", email);
    await this.page.fill("#currentAddress", currentAddress);
    await this.page.fill("#permanentAddress", permanentAddress);
    await this.page.click("#submit");
  }
);

Then(
  "I should see the output with name {string} and email {string}",
  async function (name, email) {
    const nameOutput = await this.page.locator("#name").textContent();
    const emailOutput = await this.page.locator("#email").textContent();
    expect(nameOutput).toContain(name);
    expect(emailOutput).toContain(email);
    await this.close();
  }
);
