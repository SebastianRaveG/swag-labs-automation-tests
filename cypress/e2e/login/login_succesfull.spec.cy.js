const viewports = Cypress.config('viewports');
let users;

beforeEach(() => {
  cy.clearAll();
  cy.fixture('users').then((fixtureData) => {
    users = fixtureData;
  });
});

describe('Login Functionality - Succesfull Cases', () => {

  viewports.forEach((size) => {
    Cypress._.each(['validUsers'], (userType) => {

      it(`Should log in with valid credentials for users in ${userType} on ${size} screen`, function () {
        cy.setViewport(size);
        users[userType].forEach((user) => {
          cy.log(`Testing login for user: ${user.username}`);
          cy.clearAllAndLogin(user.username, user.password);

          cy.url().should('include', '/inventory.html');

          cy.get('.bm-burger-button').click();
          cy.get('#logout_sidebar_link').click();

        });
      });
    });
  });
});
