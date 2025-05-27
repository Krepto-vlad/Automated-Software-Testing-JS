import {test, expect} from '@playwright/test';
import {FormPage, MainPage} from '../src/pages';
import DataStorage from "../src/helper/DataStorage";

test.beforeEach(async ({page}) => {
  await page.goto('https://demoqa.com/', {waitUntil: 'domcontentloaded'});
})

test('Fill form scenario', async ({page}) => {
  const mainPage = new MainPage(page);
  await test.step('Click on "Forms" card', async () => {
    await mainPage.clickCategoryCard('Forms');

  });

  await test.step('Click on "Practice form in Forms expanded list"', async () => {
    await mainPage.clickOnElementInCardList('Practice Form');
    const practiceFormHeader = mainPage.sectionHeaderLocator('Practice Form');
    await expect(practiceFormHeader).toBeVisible();
  });

  await test.step('Fill form', async () => {
    const formPage = new FormPage(page);
    await formPage.fillMandatoryFields('USER', 1);
    await mainPage.clickOnButton('Submit');
  });

await test.step('Check Modal window', async () => {
  const formPage = new FormPage(page);
  await expect(formPage.modalWindowlocator).toBeVisible({ timeout: 100000 });
});

  await test.step('Check Modal content', async () => {
    const formPage = new FormPage(page);
    const formFieldValue = await formPage.modalWindowFormField('Student Name').textContent();
    const userDataFromStorage = DataStorage.getNamespace('USER', 1).userName;
    await expect(userDataFromStorage).toBe(formFieldValue);
  });

});