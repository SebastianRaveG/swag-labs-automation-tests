
Cypress.Commands.add('clearAll', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
})

Cypress.Commands.add('clearAllAndLogin', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.wait(1000);
    cy.get('#password').type(password)
    cy.wait(1000);
    cy.get('#login-button').click()
    cy.wait(2000);

})