import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../src/pages';

test.describe('Text Box Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
  });

  test('Fill and submit text box form', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    const userData = {
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      currentAddress: 'Springfield',
      permanentAddress: 'Shelbyville',
    };

    await test.step('Fill form', async () => {
      await textBoxPage.fillTextBoxForm(userData);
    });

    await test.step('Submit form', async () => {
      await textBoxPage.submitForm();
    });

    await test.step('Check form', async () => {
      await expect(textBoxPage.outputSection).toBeVisible();

      await expect(textBoxPage.nameOutput).toContainText(userData.fullName);
      await expect(textBoxPage.emailOutput).toContainText(userData.email);
      await expect(textBoxPage.currentAddressOutput).toContainText(userData.currentAddress);
      await expect(textBoxPage.permanentAddressOutput).toContainText(userData.permanentAddress);
    });
  });
});
