
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginCredentials from '../test-data/loginCredentials.json';

test('Login test using Page Object Model', async ({ page }) => {
  // const loginPage = new LoginPage(page);
  // await loginPage.goto();
  // await loginPage.clickLoginButton();
  // await loginPage.login(loginCredentials.username, loginCredentials.password);
  // await loginPage.verifyLoginSuccess();
  // await page.pause();
  
});
