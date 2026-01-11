import { expect, Locator } from "@playwright/test";

export class Validations{
    async validateMessage(element:Locator,message:string){
        await expect(element).toBeVisible();
        await expect(element).not.toBeEmpty();
        await expect(element).toContainText(message);
    }
}