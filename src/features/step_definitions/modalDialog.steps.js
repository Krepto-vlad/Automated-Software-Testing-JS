import { When, Then } from "@cucumber/cucumber";
import { ModalDialogsPage } from "../pagesBDD/modalDialogPage.js";

When("I click the {string} button", async function (buttonText) {
  this.modalPage = new ModalDialogsPage(this.page);
  await this.modalPage.clickButtonByText(buttonText);
});

Then("I should see the modal with title {string}", async function (expectedTitle) {
  await this.modalPage.verifyModalTitle(expectedTitle);
  await this.close();
});
