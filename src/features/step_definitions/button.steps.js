import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ButtonsPage } from '../pagesBDD/buttonPage.js';

When('I double click the {string} button', async function (buttonText) {
  this.buttonsPage = new ButtonsPage(this.page);
  await this.buttonsPage.doubleClickButton(buttonText);
});

Then('I should see the message {string}', async function (expectedMessage) {
  const message = await this.buttonsPage.getDoubleClickMessage();
  expect(message).toBe(expectedMessage);
  await this.close();
});
