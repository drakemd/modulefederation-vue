import { createApp, defineAsyncComponent } from 'vue'
import Layout from './MainLayout.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { Colors } from '../../bspace_design_system/src/constants/constants'
import router from './router'

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

const Content = defineAsyncComponent(() => import('bspace_probation/Content'))
const Button = defineAsyncComponent(() => import('bspace_probation/Button'))

const app = createApp(Layout)
app.use(vuetify)
app.use(router)
app.component('ContentElement', Content)
app.component('ButtonElement', Button)

app.mount('#app')
