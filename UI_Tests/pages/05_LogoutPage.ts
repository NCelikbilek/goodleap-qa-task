import { Page } from '@playwright/test';

export class LogoutPage {
  constructor(private page: Page) {}

  async openMenu() {
    await this.page.locator('#react-burger-menu-btn').click();
  }

  async clickLogout() {
    await this.page.locator('#logout_sidebar_link').click();
  }

  async navigateToInventory() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }
}
