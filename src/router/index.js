import { createRouter, createWebHistory } from 'vue-router'

const routers = [
  {
    path: '/',
    name: 'EntryLogin.vue',
    component: () => import('@/entry/EntryLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

export default router
