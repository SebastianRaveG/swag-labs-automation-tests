describe('Add Products to Cart Details - Succesfull', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should show an error message with blocked credentials', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click()
    cy.get('#add-to-cart').click()
    cy.get('#back-to-products').click()
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').click()
    cy.get('#add-to-cart').click()
    cy.get('.shopping_cart_link').click()
  })
})