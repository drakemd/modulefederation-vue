import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/probation',
    name: 'Probation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Probation.vue')
  }
]

console.log('url', process.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router