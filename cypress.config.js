const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wlsf82-hacker-stories.web.app',
  
    projectId: "",
    viewportWidth: 1920,
    viewportHeight: 1080,
    
    setupNodeEvents(on, config) {

      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
     
     
    },
  },
});
