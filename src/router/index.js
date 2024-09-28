import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore';
import HomeView from '../views/HomeView.vue'
import Login from '@/components/auth/Login.vue'
import SignUp from '@/components/auth/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { layout: 'empty', requiresAuth: false },
    },
    {
      path: '/register',
      name: 'signUp',
      component: SignUp,
      meta: { layout: 'empty', requiresAuth: false },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/homeviews/CalendarView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/homeviews/NotesView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/homeviews/ChatView.vue'),
      meta: { requiresAuth: true },
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && ((!authStore.token) || authStore.isExpired())) {
    authStore.logout();
    next(router.resolve({ "name": "login" }).fullPath);
  } else {
    next();
  }
});

export default router
