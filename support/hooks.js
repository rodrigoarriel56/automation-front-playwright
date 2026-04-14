const { Before } = require('@cucumber/cucumber');
const PageLogin = require('../pages/pageLogin.js');
const ActionLogin = require('../actions/actionLogin.js');

Before(async function () {
    await this.init();

    const pageLogin = new PageLogin(this.page);
    this.actionLogin = new ActionLogin(pageLogin);
});