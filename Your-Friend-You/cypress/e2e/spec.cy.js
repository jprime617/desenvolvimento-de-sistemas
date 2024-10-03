describe('Teste de Login', () => {
  beforeEach(() => {
      // Visita a página de login
      cy.visit('/login'); // ajuste o caminho conforme necessário
  });

  it('Deve permitir que o usuário faça login com credenciais válidas', () => {
      // Preenche o campo de usuário
      cy.get('#usuId').type('usuario_teste'); // substitua pelo usuário de teste

      // Preenche o campo de senha
      cy.get('#senId').type('senha_teste'); // substitua pela senha de teste

      // Clica no botão de login
      cy.get('button').contains('Login').click();

      // Verifica se a URL mudou para a página Admin
      cy.url().should('include', '/Admin');
  });

  it('Deve redirecionar para a página de cadastro ao clicar em "Criar Conta"', () => {
      // Clica no link de criar conta
      cy.get('a').contains('Criar Conta').click();

      // Verifica se a URL mudou para a página de cadastro
      cy.url().should('include', '/Cadastro');
  });
});


