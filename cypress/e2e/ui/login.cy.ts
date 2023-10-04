describe("Login", () => {
  it("should redirect to game page after successful login", () => {
     cy.visit('/login');

     cy.get('[data-test="signin-username"]').type("admin");
     cy.get('[data-test="signin-password"]').type("s3cr3t");

     cy.get('[data-test="signin-submit"]').click();

     cy.location("pathname").should('equal', '/game');
  });

  it('should log error to console after an unsuccessful login', () => {
     cy.visit('/login');

     cy.get('[data-test="signin-username"]').type("admin");
     cy.get('[data-test="signin-password"]').type("admin");

     cy.get('[data-test="signin-submit"]').click();

     cy.get('[data-test="signin-error"]')
        .should('be.visible')
        .and('have.text', 'Invalid username or password');
  });
});