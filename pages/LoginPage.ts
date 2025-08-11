import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoLoginUrl() {
    await this.page.goto('/');
  }

  async clickLoginButton() {
    await this.page.getByTestId('login-button').click();
  }

  async enterUsername(username: string) {
  await this.page.getByRole('textbox', { name: 'Username or Email' }).fill(username);
  }

  async enterPassword(password: string) {
  await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async clickLogin() {
  await this.page.getByRole('button', { name: 'Log in' }).click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async verifyLoginSuccess() {
    await this.page.waitForURL('https://www.jotform.com/workspace/');
  }
}
