import { expect, Locator, Page } from "@playwright/test";

export class RadioButton {

    public readonly yesRadioButton:Locator;
    public readonly impressiveRadioButton:Locator;
    public readonly resultMessage:Locator;

    constructor(page:Page){
        this.yesRadioButton = page.locator('//input[@id="yesRadio"]');
        this.impressiveRadioButton = page.locator('//input[@id="impressiveRadio"]');
        this.resultMessage = page.locator('//span[@class="text-success"]');
    }


    async checkRadioButton(element:Locator){
        await element.check({force:true});
    }


    async validateRadioButtonMessage(message:string){
        await expect(this.resultMessage).toBeVisible();
        await expect(this.resultMessage).not.toBeEmpty();
        await expect(this.resultMessage).toContainText(message);
    }
}