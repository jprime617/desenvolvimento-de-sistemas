describe('Login Page', () => {
    it('Logando', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('#usuId').type('user123');
      cy.get('#senId').type('password123');
      cy.get('button').click();
      cy.url().should('include', '/Admin')
    });

    it('Cadastrando', () => {
        cy.visit('http://localhost:5173/Cadastro')
        cy.get('input').eq(0).type('João'); // Nome
        cy.get('input').eq(1).type('Silva'); // Sobrenome
        cy.get('input').eq(2).type('25'); // Idade
        cy.get('input').eq(3).type('joao.silva@example.com'); // Email
        cy.get('input').eq(4).type('11987654321'); // Número
        cy.get('#usuId').type('joaosilva123'); // Usuário
        cy.get('#senId').type('senhaSegura123'); // Senha
    
        // Simula o clique no botão de cadastro
        cy.get('button').click();
    
        // Verifica se o redirecionamento ocorreu para a página de login
        cy.url().should('include', '/Login');
    })
  });