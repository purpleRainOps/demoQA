import { expect, Locator, Page } from "@playwright/test";

export class Buttons {
    public readonly doubleClickButton:Locator;
    public readonly rightClickButton:Locator;
    public readonly clickButton:Locator;
    public readonly doubleClickMessage:Locator;
    public readonly rightClickMessage:Locator;
    public readonly clickMessage:Locator;

    constructor(page:Page){
        this.doubleClickButton = page.getByRole('button',{name:'Double Click Me'});
        this.rightClickButton = page.getByRole('button',{name:'Right Click Me'});
        this.clickButton = page.getByRole('button',{name:'Click Me',exact:true});
        this.doubleClickMessage = page.locator('//p[@id="doubleClickMessage"]');
        this.rightClickMessage = page.locator('//p[@id="rightClickMessage"]');
        this.clickMessage = page.locator('//p[@id="dynamicClickMessage"]');
    }


    async doubleClickInTheButton(){
        await this.doubleClickButton.dblclick();
    }

    async righClickMe(){
        await this.rightClickButton.click({button:'right'});
    }

    async clickMe(){
        await this.clickButton.click();
    }
}