import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I open the modal dialogs page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/modal-dialogs");
});

When("I click the {string} button", async function (buttonText) {
  const button = this.page.getByRole("button", { name: buttonText });
  await button.click();
});

Then(
  "I should see the modal with title {string}",
  async function (expectedTitle) {
    const modalTitle = await this.page.locator(".modal-title").textContent();
    expect(modalTitle).toBe(expectedTitle);
    await this.close();
  }
);
