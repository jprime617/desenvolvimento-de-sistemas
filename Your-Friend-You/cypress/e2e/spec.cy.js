describe('Login Page', () => {
    it('Logando', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('#usuId').type('admin');
      cy.get('#senId').type('admin');
      cy.get('button').click();
      cy.url().should('include', '/Admin')
    });

    it('Logando com credenciais errados', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('#usuId').type('user123');
      cy.get('#senId').type('password123');
      cy.get('button').click();
      
      cy.on('window:alert', (txt) =>{
        expect(txt).to.contains('Alguma coisa esta errada.')
      });
    });
  });

describe('Sign In Page', () => {
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

})


describe('Github conection', () => {
  it('Página Inicial', () => {
    cy.visit('http://localhost:5173'); // Acessa a página inicial
    cy.get('#github').click(); // Clica no botão de conexão com o GitHub na navbar

    // Verifica se o redirecionamento é para a URL de autenticação do GitHub
    cy.url().should('include', 'http://localhost:5173');
  });

  it('Página Cadastro', () => {
    cy.visit('http://localhost:5173/Cadastro');
    cy.get('#github').click(); 

    cy.url().should('include', 'http://localhost:5173/Cadastro');
  });

  it('Página Login', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('#github').click(); 

    cy.url().should('include', 'http://localhost:5173/login');
  });

  it('Página CadastroBlog', () => {
    cy.visit('http://localhost:5173/CadastroBlog');
    cy.get('#github').click(); 

    cy.url().should('include', 'http://localhost:5173/CadastroBlog');
  });

  it('Página Admin', () => {
    cy.visit('http://localhost:5173/Admin');
    cy.get('#github').click(); 

    cy.url().should('include', 'http://localhost:5173/Admin');
  });

  it('Página Blog', () => {
    cy.visit('http://localhost:5173/Blog');
    cy.get('#github').click(); 

    cy.url().should('include', 'http://localhost:5173/Blog');
  });
});

