const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 120000, // Aumenta el tiempo de espera de carga de página a 120 segundos (120000 ms)
  },
});
