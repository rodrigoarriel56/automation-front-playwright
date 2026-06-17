const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const pageLogin = require('../pages/pageLogin');

//const loginPage = require('../pages/loginPage');
const inventoryPage = require('../pages/inventoryPage');
const cartPage = require('../pages/cartPage');
const checkoutPage = require('../pages/checkoutPage');

class customWorld {
  async init() {
    this.browser = await chromium.launch({
      headless: false,
      slowMo: 500
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Pages disponíveis
    this.loginPage = new pageLogin(this.page);
    //this.loginPage = new loginPage(this.page);
    this.inventoryPage = new inventoryPage(this.page);
    this.cartPage = new cartPage(this.page);
    this.checkoutPage = new checkoutPage(this.page);
  }

  async close() 
  {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(customWorld);