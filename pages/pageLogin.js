class LoginPage {
  constructor(page) {
    this.page = page;

    // Obectos de página
    this.inputUsuario = '#user-name';
    this.inputSenha = '#password';
    this.botaoLogin = '#login-button';

    this.url = 'https://www.saucedemo.com/';
  }

  async acessarPaginaLogin() {
    await this.page.goto(this.url);
  }

  async realizarLogin(usuario, senha) {
    await this.page.fill(this.inputUsuario, usuario);
    await this.page.fill(this.inputSenha, senha);
    await this.page.click(this.botaoLogin);
  }

  async loginRealizadoComSucesso() {
    return this.page.url().includes('inventory.html');
  }
}

module.exports = LoginPage;