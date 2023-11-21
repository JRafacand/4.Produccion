const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aub1de',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, // Deshabilita la seguridad web de Chrome
    chromeArgs: ['--window-position=0,0'], // Establece la posición inicial de la ventana
  
    //viewportWidth: 1200,
    //viewportHeight: 800,
  },
  video: true,
});
