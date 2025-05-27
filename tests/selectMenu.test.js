import { test, expect } from '@playwright/test';
import { SelectMenuPage } from '../src/pages';

test.describe('Select Menu tests', () => {
  test.beforeEach(async ({ page }) => {
    const selectMenuPage = new SelectMenuPage(page);
    await selectMenuPage.navigate();
  });

  test('Complete select menu flow', async ({ page }) => {
    const selectMenuPage = new SelectMenuPage(page);
    await selectMenuPage.completeSelectMenuActions();

    const selectedCar = await selectMenuPage.carsMultiSelect.inputValue();
    expect(selectedCar).toBe('audi');
  });
});
