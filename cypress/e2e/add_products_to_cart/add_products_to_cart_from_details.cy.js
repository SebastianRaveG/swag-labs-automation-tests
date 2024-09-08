const viewports = Cypress.config('viewports');
let users;

beforeEach(() => {
  cy.clearAll();
  cy.fixture('users').then((fixtureData) => {
    users = fixtureData;
  });
});

describe('Add Products to Cart - Succesfull', () => {
  viewports.forEach((size) => {
    Cypress._.each(['validUsers'], (userType) => {


      it(`Should add products to the cart from detail products and verify them with valid users in ${userType} on ${size} screen`, () => {
        cy.setViewport(size);
        users[userType].forEach((user) => {
          cy.clearAllAndLogin(user.username, user.password);

          cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click()
          cy.get('#add-to-cart').click()

          cy.get('#back-to-products').click()

          cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').click()
          cy.get('#add-to-cart').click()

          cy.get('.shopping_cart_link').click()

          cy.get('.cart_item').should('have.length', 2);
          cy.get('.inventory_item_name').first().should('contain.text', 'Sauce Labs Backpack');
          cy.get('.inventory_item_name').last().should('contain.text', 'Sauce Labs Bike Light');
        });
      });
    });
  });
});