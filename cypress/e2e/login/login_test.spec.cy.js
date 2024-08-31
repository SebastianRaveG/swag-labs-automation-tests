const viewports = Cypress.config('viewports');
let users;

before(() => {
  cy.fixture('users').then((fixtureData) => {
    users = fixtureData;
  });
});

beforeEach(() => {
  cy.clearAll();
});

describe('Login Functionality Test', () => {

  context('Success Cases', () => {
    viewports.forEach((size) => {
      Cypress._.each(['validUsers'], (userType) => {

        it(`Should log in with valid credentials for users in ${userType} on ${size} screen`, function() {
          cy.setViewport(size);
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

  context('Failed Cases', () => {
    viewports.forEach((size) => {
      it(`Should show an error message with invalid credentials on ${size} screen`, function() {
        cy.setViewport(size);
        cy.clearAllAndLogin(users.invalidUser.username, users.invalidUser.password);
        cy.get('.error-message-container').should('be.visible');
      });

      it(`Should show an error message without data in the username and pasrrword on ${size} screen`, function() {
        cy.setViewport(size);
        cy.get('#login-button').click()
        cy.get('.error-message-container').should('be.visible');
      });

      it(`Should show an error message with blocked credentials on ${size} screen`, function() {
        cy.setViewport(size);
        cy.clearAllAndLogin(users.blockedUser.username, users.blockedUser.password);
        cy.get('.error-message-container').should('be.visible');
      });
    });
  });
});
