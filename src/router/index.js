import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../components/DetailsView.vue')
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../components/FeaturesView.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../components/BookView.vue')
    },
  ]
})

export default router
