class PageLogin {
    constructor(page) {
        this.page = page;

        this.inputUsername = '#user-name';
        this.inputPassword = '#password';
        this.btnLogin = '#login-button';
    }

    async preencherUsuario(usuario) {
        await this.page.fill(this.inputUsername, usuario);
    }

    async preencherSenha(senha) {
        await this.page.fill(this.inputPassword, senha);
    }

    async clicarLogin() {
        await this.page.click(this.btnLogin);
    }
}

module.exports = PageLogin;