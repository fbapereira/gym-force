describe('Given a not logged in user', () => {
  describe('When navigate to the home page', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Then should see the login page', () => {
      cy.contains('Login');
    });

    it('And should see the login form', () => {
      cy.get('form').should('have.length', 1);
    });

    it('And should see the login button', () => {
      cy.get('button').contains('Login');
    });

    describe('When fill the login form and click the login button', () => {
      beforeEach(() => {
        cy.get('input[data-e2e="txtLogin"]').type('admin');
        cy.get('input[data-e2e="txtPassword"]').type('admin');
        cy.get('button').contains('Login').click();
      });

      it('Then should see the success message', () => {
        cy.get('.p-toast-message-success').should('have.length', 1);
      });
    });

    describe('When not fill the login form and click the login button', () => {
      beforeEach(() => {
        cy.get('button').contains('Login').click();
      });

      it('Then should see the error message', () => {
        cy.get('.p-toast-message-error').should('have.length', 1);
      });
    });

    describe("when fill the form with invalid credentials and click the login button", () => {
    });

    describe('When click the register link', () => {
    });
  });
})
