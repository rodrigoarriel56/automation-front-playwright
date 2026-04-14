const PageLogin = require('../pages/pageLogin');

class ActionLogin {
    constructor(pageLogin) {
        this.pageLogin = PageLogin;
        //this.page = pageLogin.page;
        this.page = pageLogin;
    }

    async acessarPaginaLogin() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async realizarLogin(usuario, senha) {
        await this.pageLogin.preencherUsuario(usuario);
        await this.pageLogin.preencherSenha(senha);
        await this.pageLogin.clicarLogin();
    }

    async validarLoginComSucesso() {
        await this.page.waitForURL('**/inventory.html');
    }
}

module.exports = ActionLogin;