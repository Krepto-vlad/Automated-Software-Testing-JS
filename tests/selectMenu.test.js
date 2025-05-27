import { test, expect } from '@playwright/test';
import { SelectMenuPage } from '../src/pages/SelectMenuPage';

test.describe('Select Menu tests', () => {
  test('Complete select menu flow', async ({ page }) => {
    const selectMenuPage = new SelectMenuPage(page);
    await selectMenuPage.navigate();
    await selectMenuPage.completeSelectMenuActions();

    const selectedCar = await selectMenuPage.locator('#cars').inputValue();
    expect(selectedCar).toBe('audi');
  });
});
