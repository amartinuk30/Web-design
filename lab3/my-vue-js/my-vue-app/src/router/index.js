import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
   component: () => import('../views/HomeView.vue')
  },
    {
      path: '/info',
      name: 'info',
     component: () => import('../views/InfoView.vue')
    },
    {
      path: '/register',
      name: 'register',
     component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/input',
      name: 'input',
     component: () => import('../views/InputView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
     component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/post1',
      name: 'post1',
      component: () => import('../views/PostView1.vue')
    },
    {
      path: '/post2',
      name: 'post2',
      component: () => import('../views/PostView2.vue')
    },
    {
      path: '/post3',
      name: 'post3',
      component: () => import('../views/PostView3.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
