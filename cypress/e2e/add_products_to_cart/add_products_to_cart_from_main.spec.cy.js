describe('Add Products to Cart - Succesfull', () => {
   beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should add products to the cart and verify them', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('have.length', 2)
    cy.get('.inventory_item_name').first().should('contain.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_name').last().should('contain.text', 'Sauce Labs Bike Light')
  })

})