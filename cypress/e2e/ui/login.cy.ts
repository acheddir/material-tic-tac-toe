describe("Login", () => {

   it("should redirect to game page after successful login", () => {
      cy.visit('/login');

      cy.getByDataCy('signin-username').type("admin");
      cy.getByDataCy('signin-password').type("s3cr3t");

      cy.getByDataCy('signin-submit').click();

      cy.location("pathname").should('equal', '/game');
   });

   it('should log error to console after an unsuccessful login', () => {
      cy.visit('/login');

      cy.getByDataCy('signin-username').type("admin");
      cy.getByDataCy('signin-password').type("badPassword");

      cy.getByDataCy('signin-submit').click();

      cy.getByDataCy('signin-error')
         .should('be.visible')
         .and('have.text', 'Invalid username or password');
   });

});