import { When, Then } from "@cucumber/cucumber";
import { faker } from "@faker-js/faker";
import { TextBoxPage } from "../pagesBDD/textBoxPage.js";

When("I fill in the text box form with generated data", async function () {
  this.textBoxPage = new TextBoxPage(this.page);

  this.generatedData = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    currentAddress: faker.location.streetAddress(),
    permanentAddress: faker.location.secondaryAddress(),
  };

  await this.textBoxPage.fillForm(this.generatedData);
});

Then("I should see the generated name and email in the output", async function () {
  await this.textBoxPage.verifyOutput(this.generatedData);
  await this.close();
});

