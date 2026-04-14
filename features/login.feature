Feature: Login

  Como um usuário do sistema
  Quero realizar login
  Para acessar a área interna

  Scenario: Login com sucesso
    Given que acesso a pagina de login
    When informo usuário "standard_user" e senha "secret_sauce"
    Then devo ser autenticado com sucesso


