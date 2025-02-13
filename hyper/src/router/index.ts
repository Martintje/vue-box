import { createRouter, createWebHistory } from 'vue-router'

import type { RouteType } from '../types/RouteType'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
  ] satisfies RouteType[],
})

export default router
