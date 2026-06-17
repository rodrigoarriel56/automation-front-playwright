class cartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = 'button:has-text("Checkout")';
  }

  async iniciarCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = cartPage;