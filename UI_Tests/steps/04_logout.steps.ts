import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LogoutPage } from '../pages/05_LogoutPage';

const { When, Then } = createBdd();

When('the user opens the menu', async ({ page }) => {
  const logoutPage = new LogoutPage(page);
  await logoutPage.openMenu();
});

When('the user clicks logout', async ({ page }) => {
  const logoutPage = new LogoutPage(page);
  await logoutPage.clickLogout();
});

When('the user navigates back to the inventory page', async ({ page }) => {
  const logoutPage = new LogoutPage(page);
  await logoutPage.navigateToInventory();
});

Then('the user should be redirected to the login page', async ({ page }) => {
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
