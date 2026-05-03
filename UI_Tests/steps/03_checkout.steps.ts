import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/01_LoginPage';
import { InventoryPage } from '../pages/02_InventoryPage';
import { CartPage } from '../pages/03_CartPage';
import { CheckoutPage } from '../pages/04_CheckoutPage';

const { Given, When, Then } = createBdd();

Given('the user goes to the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.goToCart();
});

When('the user proceeds to checkout', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.proceedToCheckout();
});

When('the user enters first name {string} last name {string} and zip {string}', async ({ page }, firstName: string, lastName: string, zip: string) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillDetails(firstName, lastName, zip);
});

When('the user continues to order overview', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.continue();
});

When('the user finishes the order', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.finish();
});

Then('the order confirmation message should be visible', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  const confirmation = await checkoutPage.getConfirmationMessage();
  await expect(confirmation).toBeVisible();
});

Then('a checkout error message should be visible', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  const error = await checkoutPage.getErrorMessage();
  await expect(error).toBeVisible();
});
