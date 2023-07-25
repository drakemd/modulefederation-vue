import { createApp, defineAsyncComponent } from 'vue'
import Layout from './MainLayout.vue'
import { registerPlugins } from './plugins/index'
import router from './router'
import PubSub from './services/pubsub'

// Initialize PubSub Event messaging between apps
const events = new PubSub({ persistedTopics: [] });
window.fsEvents = events;

// define remote remote components
const ProbationPage = defineAsyncComponent(() => import('bspace_probation/ProbationPage'))

const app = createApp(Layout)
app.component('ProbationPage', ProbationPage)

registerPlugins(app)
app.use(router)
app.mount('#app')
