import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { layout: 'empty', requiresAuth: false },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/homeviews/CalendarView.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/homeviews/NotesView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/homeviews/ChatView.vue')
    }
  ]
})

export default router
