import { expect, Locator, Page } from "@playwright/test";

export class TextBox{

    public readonly fullNameInput:Locator;
    public readonly emailInput:Locator;
    public readonly currentAddressInput:Locator;
    public readonly permanentAddressInput:Locator;
    public readonly submitButton:Locator;
    public readonly resultFullName:Locator;
    public readonly resultEmail:Locator;
    public readonly resultCurrentAddress:Locator;
    public readonly resultPermanentAddress:Locator;
    public readonly inputError:Locator;

    constructor(page:Page){
        this.fullNameInput = page.getByRole('textbox',{name:'Full Name'});
        this.emailInput = page.getByRole('textbox',{name:'name@example.com'});
        this.currentAddressInput = page.getByRole('textbox',{name:'Current Address'});
        this.permanentAddressInput = page.locator('//textarea[@id="permanentAddress"]');
        this.submitButton = page.getByRole('button',{name:'Submit'});
        this.resultFullName = page.locator('//p[@id="name"]');
        this.resultEmail = page.locator('//p[@id="email"]');
        this.resultCurrentAddress = page.locator('//p[@id="currentAddress"]');
        this.resultPermanentAddress = page.locator('//p[@id="permanentAddress"]');
        this.inputError = page.locator('//input[@class=\'mr-sm-2 field-error form-control\']');
    }


    async fillForm(fullName:string,email:string,currentAddress:string,permanentAddress:string){
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddress);
        await this.permanentAddressInput.fill(permanentAddress);
        await this.submitButton.click();
    }

    async validateFormSuccessful(fullName:string,email:string,currentAddress:string,permanentAddress:string){
        await expect(this.resultFullName).toBeVisible();
        await expect(this.resultFullName).not.toBeEmpty();
        await expect(this.resultFullName).toContainText(fullName);
        await expect(this.resultEmail).toBeVisible();
        await expect(this.resultEmail).not.toBeEmpty();
        await expect(this.resultEmail).toContainText(email);
        await expect(this.resultCurrentAddress).toBeVisible();
        await expect(this.resultCurrentAddress).not.toBeEmpty();
        await expect(this.resultCurrentAddress).toContainText(currentAddress);
        await expect(this.resultPermanentAddress).toBeVisible();
        await expect(this.resultPermanentAddress).not.toBeEmpty();
        await expect(this.resultPermanentAddress).toContainText(permanentAddress);   
    }

    async validateFormErrors(){
        await expect(this.inputError).toBeVisible();
    }
}