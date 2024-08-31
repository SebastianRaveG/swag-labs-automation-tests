const viewports = Cypress.config('viewports');
let users;

beforeEach(() => {
    cy.clearAll();
    cy.fixture('users').then((fixtureData) => {
        users = fixtureData;
    });
});

describe('Login Functionality - Blocked Cases', () => {
    viewports.forEach((size) => {
        it(`Should show an error message with blocked credentials on ${size} screen`, () => {
            cy.setViewport(size);
            cy.clearAllAndLogin(users.blockedUser.username, users.blockedUser.password)
            cy.get('.error-message-container').should('be.visible')
        })
    })
})