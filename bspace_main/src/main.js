import { createApp, defineAsyncComponent } from 'vue'
import Layout from './MainLayout.vue'
import { registerPlugins } from './plugins/index'
import PubSub from './services/pubsub'
import router from './router'

// Initialize PubSub Event messaging between apps
const events = new PubSub({ persistedTopics: [] });
window.fsEvents = events;

var subId = events.subscribe('mantul', (data) => console.log('data masuk main', data))

const app = createApp(Layout)
registerPlugins(app)
app.use(router)

// remote components
const ProbationPage = defineAsyncComponent(() => import('bspace_probation/ProbationPage'))
app.component('ProbationPage', ProbationPage)

app.mount('#app')
