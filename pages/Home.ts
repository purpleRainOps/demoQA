import { Constants} from "../constants/Constants"
import { Locator, Page } from "@playwright/test"

export class Home{

    public readonly elementsButton:Locator;
    public readonly formsButton:Locator;
    public readonly alertFrameWindowsButton:Locator;
    public readonly widgetsButton:Locator;
    public readonly interacitonsButton:Locator;
    public readonly bookStoreApplicationButton:Locator;

    constructor(page:Page){
        this.elementsButton = page.locator('//div[@class=\'card-body\']//h5[text()=\'Elements\']');
        this.formsButton = page.locator('//div[@class=\'card-body\']//h5[text()=\'Forms\']');
        this.alertFrameWindowsButton = page.locator('//div[@class=\'card-body\']//h5[text()=\'Alerts, Frame & Windows\']');
        this.widgetsButton = page.locator('//div[@class=\'card-body\']//h5[text()=\'Widgets\']');
        this.interacitonsButton = page.locator('//div[@class=\'card-body\']//h5[text()=\'Interactions\']');
        this.bookStoreApplicationButton = page.locator('//div[@class=\'card-body\']//h5[text()=\'Book Store Application\']');
    }


    async navigateToHomePage(page:Page){
        await page.goto(Constants.BASE_URL);
    }

    async navigateToElements(element:Locator){
        await element.click();
    }
}