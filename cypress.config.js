const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const fs = require('fs-extra');
const path = require('path');


module.exports = defineConfig({
  "projectId": 'sjnqhg',
  "viewportWidth": 1280,
  "viewportHeight": 800,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        clearDownloads() {
          const downloadsFolder = path.join(__dirname, 'cypress', 'downloads');

          return fs.emptyDir(downloadsFolder)
            .then(() => {
              console.log('Download folder cleared');
              return null;
            })
            .catch(err => {
              console.error('Error clearing download folder:', err);
              throw err;
            });
        },
        
      });
      allureWriter(on, config);
      return config;

      return config;
      // implement node event listeners here
     
    },
    fixturesFolder: 'cypress/e2e/fixtures',
   
    video: true,
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
  
    pageLoadTimeout:60000 ,
    screenshots: true,
  
    screenshotOnRunFailure: true,
    env: {
      baseURL1: 'https://extaz-oci.aetna.com/pocui/',
      baseURL2: 'https://proview.caqh.org/Login?Type=PR',
    },
    },
  },
);
