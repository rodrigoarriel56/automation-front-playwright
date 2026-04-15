const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../pages/pageLogin');

class CustomWorld {
  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Pages disponíveis nos steps
    this.loginPage = new LoginPage(this.page);
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);