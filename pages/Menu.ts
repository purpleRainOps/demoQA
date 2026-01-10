import { Locator, Page } from "@playwright/test";

export class Menu{
    public readonly texboxButton:Locator;
    public readonly checkBoxButton:Locator;
    public readonly radioButton:Locator;
    public readonly webTablesButton:Locator;
    public readonly buttonsLocator:Locator;
    public readonly linksButton:Locator;
    public readonly brokenLinksButton:Locator;
    public readonly uploadAndDownloadButton:Locator;
    public readonly dynamicPropertiesButton:Locator;

    constructor(page:Page){
        this.texboxButton = page.locator('//li[@id="item-0"]//span[text()="Text Box"]')
        this.checkBoxButton = page.locator('//li[@id="item-1"]//span[text()="Check Box"]')
        this.radioButton = page.locator('//li[@id="item-2"]//span[text()="Radio Button"]')
        this.webTablesButton = page.locator('//li[@id="item-3"]//span[text()="Web Tables"]')
        this.buttonsLocator = page.locator('//li[@id="item-4"]//span[text()="Buttons"]')
        this.linksButton = page.locator('//li[@id="item-5"]//span[text()="Links"]')
        this.brokenLinksButton = page.locator('//li[@id="item-6"]//span')
        this.uploadAndDownloadButton = page.locator('//li[@id="item-7"]//span')
        this.dynamicPropertiesButton = page.locator('//li[@id="item-8"]//span')
        
    }

    async navigateToElementMenu(element:Locator){
        await element.click();
    }

}