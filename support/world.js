const { chromium } = require('playwright');
const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    async init() {
        this.browser = await chromium.launch({ headless: false });
        this.page = await this.browser.newPage();
    }

    async close() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);