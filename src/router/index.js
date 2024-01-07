import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'ProjectsPage',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
