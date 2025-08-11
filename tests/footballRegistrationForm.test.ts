import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BasePage } from '../pages/basePage';    
import { FootballRegistrationForm } from '../pages/footballRegistrationForm';   

test('Validate and enter the required details in car insurance form', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginUrl();

    const basePage = new BasePage(page);
    await basePage.searchTemplates('Football Registration Form');
    
    const footballRegForm = new FootballRegistrationForm(page);
    await footballRegForm.footballRegForm.click();
    await page.pause();


    

});
