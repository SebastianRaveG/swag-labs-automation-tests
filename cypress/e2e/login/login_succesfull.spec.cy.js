// cypress/e2e/login.cy.js
describe('Login Functionality - Success Cases', () => {
  beforeEach(() => {
    // Nada que hacer aquí por ahora
  });

  Cypress._.each(['validUsers'], (userType) => {
    it(`Should log in with valid credentials for ${userType}`, () => {
      cy.fixture('users').then((users) => {
        users[userType].forEach((user) => {
          cy.clearAllAndLogin(user.username, user.password);

          cy.url().should('include', '/inventory.html');

          cy.get('.bm-burger-button').click();
          cy.get('#logout_sidebar_link').click();

          cy.wait(1000);

        });
      });
    });
  });
});
