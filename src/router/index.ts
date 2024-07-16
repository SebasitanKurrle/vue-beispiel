import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import AdminLoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: CreateView
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLoginView
    }
  ]
})

export default router
