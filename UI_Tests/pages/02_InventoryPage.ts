import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page.locator('[data-test^="add-to-cart"]').first().click();
  }

  async removeFirstProductFromCart() {
    await this.page.locator('[data-test^="remove"]').first().click();
  }

  async goToFirstProductDetail() {
    await this.page.locator('.inventory_item_name').first().click();
  }

  async getCartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
