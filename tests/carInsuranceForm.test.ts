import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CarInsurancePage } from '../pages/carInsurancePage.po';

test('Validate and enter the required details in car insurance form', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginUrl();
    const carInsurancePage = new CarInsurancePage(page);
    await carInsurancePage.hoverTemplateDropdown();
    await carInsurancePage.clickFormTemplateMenu();
    await carInsurancePage.clickCarInsuranceTemplate();
    await page.pause();
});