const { defineConfig } = require('cypress');

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://clinlife.fi',
    viewportWidth: 1200,
    viewportHeight: 900,
  },

});
