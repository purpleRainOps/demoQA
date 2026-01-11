import test from "@playwright/test";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { RadioButton } from "../pages/RadioButton";

let homePage:Home;
let menuPage:Menu;
let radioButtonPage:RadioButton;

test.beforeEach(async ({page})=>{
    homePage = new Home(page);
    menuPage = new Menu(page);
})

test('Navigate to radiobutton and validate yes', async ({page})=>{
    radioButtonPage = new RadioButton(page);
    await homePage.navigateToHomePage(page);
    await homePage.navigateToElements(homePage.elementsButton);
    await menuPage.navigateToElementMenu(menuPage.radioButton);
    await radioButtonPage.checkRadioButton(radioButtonPage.yesRadioButton);
    await radioButtonPage.validateRadioButtonMessage("no");
})