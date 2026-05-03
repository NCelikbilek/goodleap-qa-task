import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/01_LoginPage';

const { Given, When, Then } = createBdd();

Given('the user navigates to {string}', async ({ page }, url: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('the user enters username {string}', async ({ page }, username: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.fillUsername(username);
});

When('the user enters password {string}', async ({ page }, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.fillPassword(password);
});

When('the user clicks the login button', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.clickLogin();
});

Then('the URL should contain {string}', async ({ page }, urlPart: string) => {
  await expect(page).toHaveURL(new RegExp(urlPart));
});

Then('an error message should be visible', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
});
