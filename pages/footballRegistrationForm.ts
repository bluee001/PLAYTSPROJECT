// pages/LoginPage.ts
import { Locator, Page } from '@playwright/test';

export class FootballRegistrationForm {
  
  readonly page: Page;
  readonly usernameField: Locator;
  readonly footballRegForm: Locator;

 

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.footballRegForm=page.locator("//h3[text()='Football Registration Form']");

  }


 
}
