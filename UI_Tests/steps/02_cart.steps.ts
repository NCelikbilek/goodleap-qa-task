import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/01_LoginPage';
import { InventoryPage } from '../pages/02_InventoryPage';

const { Given, When, Then } = createBdd();

Given('the user is logged in as {string}', async ({ page }, username: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillUsername(username);
  await loginPage.fillPassword('secret_sauce');
  await loginPage.clickLogin();
});

When('the user adds the first product to the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addFirstProductToCart();
});

When('the user removes the first product from the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.removeFirstProductFromCart();
});

When('the user navigates to the product detail page', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.goToFirstProductDetail();
});

Then('the cart badge should show {string}', async ({ page }, count: string) => {
  const inventoryPage = new InventoryPage(page);
  const badge = await inventoryPage.getCartBadge();
  await expect(badge).toHaveText(count);
});

Then('the cart badge should not be visible', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const badge = await inventoryPage.getCartBadge();
  await expect(badge).not.toBeVisible();
});
