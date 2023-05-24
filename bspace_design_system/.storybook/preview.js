// .storybook/preview.js

import { setup } from '@storybook/vue3';

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

setup((app) => {
  const vuetify = createVuetify({
    components,
    directives,
  })
  // Registers your app's plugins into Storybook
  app.use(vuetify)
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
          method: 'alphabetical',
          order: ['Guides', ['Introduction', 'Guides'], 'Design System', 'Components'],
          locales: 'en-US',
      }
    },
  },
};

export default preview;
