import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakeOrder from '../views/MakeOrderView.vue'
import OrdersView from '@/views/OrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/makeorder',
      name: 'makeorder',
      component: MakeOrder,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView,
    },

  ],
})

export default router
