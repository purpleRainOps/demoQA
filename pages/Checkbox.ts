import { expect, Locator, Page } from "@playwright/test";

export class Checkbox {

    public readonly homeCheckbox: Locator;
    public readonly resultMessage: Locator;
    public readonly footer: Locator;

    constructor(page: Page) {
        this.homeCheckbox = page.locator('//input[@id="tree-node-home"]')
        this.resultMessage = page.locator('//div[@id="result"]');
        this.footer = page.locator('//footer//span[text()="© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED."]')
    }


    async checkHomeCheckbox() {
        await this.homeCheckbox.setChecked(true,{force:true});
    }

    async uncheckHomeCheckbox() {
        await this.homeCheckbox.setChecked(false,{force:true});
    }


    async validateHomeCheckbox() {
        await expect(this.homeCheckbox).toBeChecked();
        await expect(this.resultMessage).toBeVisible();
        await expect(this.resultMessage).not.toBeEmpty();
    }

    async validateUncheckHomeCheckbox() {
        await expect(this.homeCheckbox).not.toBeChecked();
    }
}