const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videosFolder: 'cypress/videos',
    // pageLoadTimeout: 120000,
  },
  viewports: ['iphone-6', [1024, 768]]
});
