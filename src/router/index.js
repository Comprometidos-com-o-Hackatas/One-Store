import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/ProductDetailView.vue')
    }
  ],
})

export default router
