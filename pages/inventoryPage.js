class inventoryPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = '.shopping_cart_link';
  }

  async selecionarProduto() {
    await this.page.click(`#add-to-cart-sauce-labs-bike-light`);
  }

  async adicionarAoCarrinho() {
    await this.page.click('#checkout)');
  }

  async preencherDadosEContinuar(nome, sobrenome, cep) {
  await this.page.locator('#first-name').fill(nome);
  await this.page.locator('#last-name').fill(sobrenome);
  await this.page.locator('#postal-code').fill(cep);
  await this.page.locator('#continue').click();
  }
}

module.exports = inventoryPage;
