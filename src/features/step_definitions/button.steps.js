import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I open the buttons page', async function () {
    await this.launch();
    await this.page.goto('https://demoqa.com/buttons');
});

When('I double click the {string} button', async function (buttonText) {
    const button = this.page.locator('button', { hasText: buttonText });
    await button.dblclick();
});

Then('I should see the message {string}', async function (expectedMessage) {
    const message = await this.page.locator('#doubleClickMessage').textContent();
    expect(message).toBe(expectedMessage);
    await this.close();
});
