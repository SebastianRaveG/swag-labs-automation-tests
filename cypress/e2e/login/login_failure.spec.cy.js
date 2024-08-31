const viewports = Cypress.config('viewports');
let users;

beforeEach(() => {
    cy.clearAll();
    cy.fixture('users').then((fixtureData) => {
        users = fixtureData;
    });
});

describe('Login Functionality - Failure Cases', () => {
    viewports.forEach((size) => {
        it(`Should show an error message with invalid credentials on ${size} screen`, () => {
            cy.setViewport(size);
            cy.clearAllAndLogin(users.invalidUser.username, users.invalidUser.password);
            cy.get('.error-message-container').should('be.visible')
        });
    });
});