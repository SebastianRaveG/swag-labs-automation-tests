
Cypress.Commands.add('clearAll', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
})

Cypress.Commands.add('clearAllAndLogin', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()

})

Cypress.Commands.add('setViewport', (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});
