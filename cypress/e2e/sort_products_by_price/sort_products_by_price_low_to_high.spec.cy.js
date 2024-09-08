const viewports = Cypress.config('viewports');
let users;

beforeEach(() => {
  cy.clearAll();
  cy.fixture('users').then((fixtureData) => {
    users = fixtureData;
  });
});

describe('Sort Products by Name Z to A - Succesfull', () => {
  viewports.forEach((size) => {
    Cypress._.each(['validUsers'], (userType) => {

      it(`Should add products to the cart and verify them with valid users in ${userType} on ${size} screen`, () => {
        cy.setViewport(size);
        users[userType].forEach((user) => {
          cy.clearAllAndLogin(user.username, user.password);
          cy.get('.product_sort_container').select('Price (low to high)')
          cy.get('.inventory_item_price').then(($prices) => {
            const prices = $prices.map((index, html) => parseFloat(Cypress.$(html).text().replace('$', ''))).get()
            const sortedPrices = [...prices].sort((a, b) => a - b)
            expect(prices).to.deep.equal(sortedPrices)
          });
        });
      });
    });
  });
});