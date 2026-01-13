import test from "@playwright/test";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Buttons } from "../pages/Buttons";
import { Validations } from "../pages/reutilizableValidations/Validations";

test.describe('Buttons Page Tests', () => {
    let homePage: Home;
    let menuPage: Menu;
    let buttonsPage: Buttons;
    let validationsPage: Validations;

    test.beforeEach(async ({ page }) => {
        homePage = new Home(page);
        menuPage = new Menu(page);
        buttonsPage = new Buttons(page);
        validationsPage = new Validations();

        await homePage.navigateToHomePage(page);
        await homePage.navigateToElements(homePage.elementsButton);
        await menuPage.navigateToElementMenu(menuPage.buttonsLocator);
    });

    test('validate double click button', async () => {
        await buttonsPage.doubleClickInTheButton();
        await validationsPage.validateMessage(buttonsPage.doubleClickMessage, "You have done a double click");
    });

    test('validate right click button', async () => {
        await buttonsPage.righClickMe();
        await validationsPage.validateMessage(buttonsPage.rightClickMessage, "You have done a right click");
    });

    test('validate click button', async () => {
        await buttonsPage.clickMe();
        await validationsPage.validateMessage(buttonsPage.clickMessage, "You have done a dynamic click");
    });
});
