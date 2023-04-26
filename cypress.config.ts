import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser  , launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--remote-debugging-port=9299');
        }

      })

    },

    viewportWidth: 1920,
    viewportHeight: 1080,
    videoCompression: false,


  },


});


