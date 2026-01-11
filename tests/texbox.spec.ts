import test from "@playwright/test";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { TextBox } from "../pages/TextBox";
import texboxData from "../data/texbox.json";


let homePage: Home;
let menuPage: Menu;
let textBoxPage: TextBox;

test.beforeEach(async ({ page }) => {
    homePage = new Home(page);
    menuPage = new Menu(page);
});

test('Navigate to texbox and validate form successful', async ({ page }) => {
    textBoxPage = new TextBox(page);
    await homePage.navigateToHomePage(page);
    await homePage.navigateToElements(homePage.elementsButton);
    await menuPage.navigateToElementMenu(menuPage.texboxButton);
    await textBoxPage.fillForm(texboxData.validateFormSuccessfull.fullName,texboxData.validateFormSuccessfull.email,texboxData.validateFormSuccessfull.currentAddress,texboxData.validateFormSuccessfull.permanentAddress);
    await textBoxPage.validateFormSuccessful(texboxData.validateFormSuccessfull.fullName,texboxData.validateFormSuccessfull.email,texboxData.validateFormSuccessfull.currentAddress,texboxData.validateFormSuccessfull.permanentAddress);
});

test('Navigate to texbox and validate form errors', async ({ page }) => {
    textBoxPage = new TextBox(page);
    await homePage.navigateToHomePage(page);
    await homePage.navigateToElements(homePage.elementsButton);
    await menuPage.navigateToElementMenu(menuPage.texboxButton);
    await textBoxPage.fillForm(texboxData.validateFormErrors.fullName,texboxData.validateFormErrors.email,texboxData.validateFormErrors.currentAddress,texboxData.validateFormErrors.permanentAddress);
    await textBoxPage.validateFormErrors();
});