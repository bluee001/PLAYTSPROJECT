import { Locator, Page } from "@playwright/test";

export class BasePage {
    
    readonly page: Page;
    readonly templateDropdown: Locator;
    readonly formTemplateMenu: Locator;
    readonly searchTemplate: Locator;  

    constructor(page: Page) {
        this.page = page;
        this.templateDropdown = page.getByRole('menuitem', { name: 'Templates', exact: true });
        this.formTemplateMenu = page.getByRole('menuitem', { name: 'Form Templates', exact: true });
        this.searchTemplate = page.getByPlaceholder('Search in all Form Templates');

    }

    async searchTemplates(templateName: string) {
        await this.templateDropdown.hover();
        await this.formTemplateMenu.click();
        await this.searchTemplate.fill(templateName);
        await this.searchTemplate.press('Enter');
    }
    

}