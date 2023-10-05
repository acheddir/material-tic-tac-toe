// Cypress comes with built-in commands to interact with the web page (DOM).
// There are three categories : parent, child and dual.
// Can create custom commands, and override existing commands.

// Parent commands begin a new chain of commands. (Cannot be used as a child command)
// cy.visit('/login');
// cy.get('h1');
// cy.request('http://demo.local/api/users');
// cy.exec('npm run build');
// cy.intercept('/users/**');

// Child commands chained of a parent command, or another child command.
// cy.get('[data-testid="signin-submit"]').click();
// cy.get('[data-testid="signin-firstname"]').type('Abderrahman');
// cy.get('.navbar').find('ul');
// cy.contains('ul', 'Logout').should('be.visible');
// cy.get('footer').scrollIntoView();
// cy.get('form').submit();

// Dual commands can either start a chain of be chained off an existing one. (Act as a parent or child command)
// cy.contains()
// cy.screenshot();
// cy.scrollTo();
// cy.wait();