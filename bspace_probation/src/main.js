import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { Colors } from '../../bspace_design_system/src/constants/constants'

const myCustomLightTheme = {
    dark: false,
    colors: Colors,
}
  
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
        myCustomLightTheme,
        },
    },
    components,
    directives,
})

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
