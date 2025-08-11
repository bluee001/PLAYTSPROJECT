import { Page } from "@playwright/test";

export class CarInsurancePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async hoverTemplateDropdown() {
        await this.page.getByRole('menuitem', { name: 'Templates', exact: true }).hover();
    }

    async clickFormTemplateMenu() {
        await this.page.getByRole('menuitem', { name: 'Form Templates', exact: true }).click();
    }

    async clickCarInsuranceTemplate() {
        await this.page.getByRole('link', { name: 'Car Insurance Quotation Form Template' }).click();
    }
}