const viewports = Cypress.config('viewports');
let users;

beforeEach(() => {
    cy.clearAll();
    cy.fixture('users').then((fixtureData) => {
        users = fixtureData;
    });
});

describe('Login Functionality - Empty Cases', () => {
    viewports.forEach((size) => {
        it(`Should show an error message with Username is required on ${size} screen`, () => {
            cy.setViewport(size);
            cy.visit('https://www.saucedemo.com/')
            cy.get('#login-button').click()
            cy.get('.error-message-container').should('be.visible');
        })
    })
})