import test from "@playwright/test";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Checkbox } from "../pages/Checkbox";


let homePage:Home;
let menuPage:Menu;
let checkboxPage:Checkbox;


test.beforeEach(async ({page})=>{
    homePage = new Home(page);
    menuPage = new Menu(page);
    
})

test('Check Successfull home Routes', async ({page})=>{
    checkboxPage = new Checkbox(page);
    await homePage.navigateToHomePage(page);
    await homePage.navigateToElements(homePage.elementsButton);
    await menuPage.navigateToElementMenu(menuPage.checkBoxButton);
    await checkboxPage.checkHomeCheckbox();
    await checkboxPage.validateHomeCheckbox();
})

test('Check Unsuccessfull home Routes', async ({page})=>{
    checkboxPage = new Checkbox(page);
    await homePage.navigateToHomePage(page);
    await homePage.navigateToElements(homePage.elementsButton);
    await menuPage.navigateToElementMenu(menuPage.checkBoxButton);
    await checkboxPage.checkHomeCheckbox();
    await checkboxPage.uncheckHomeCheckbox();
    await checkboxPage.validateUncheckHomeCheckbox();
})
