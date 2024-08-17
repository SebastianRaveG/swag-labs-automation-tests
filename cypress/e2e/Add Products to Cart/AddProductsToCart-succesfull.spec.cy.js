describe('Add Products to Cart - Succesfull', () => {
   beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should show an error message with blocked credentials', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('.shopping_cart_link').click()
  })
})