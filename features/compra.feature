Feature: Compra de produto

  Como um usuário do sistema
  Quero realizar compras de produtos
  Quero finalizar minhas compras com sucesso

  Scenario: Comprar produto com sucesso
    Given que estou na página de login
    When faço login com usuário válido
    And adiciono um produto ao carrinho
    And acesso o carrinho
    And realizo o checkout
    Then finalizo a compra com sucesso