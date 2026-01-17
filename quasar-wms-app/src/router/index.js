import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '../layouts/AppLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import OutboundsPage from '../pages/OutboundsPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.vue'
import MfaPage from '../pages/MfaPage.vue'

const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'forgot', component: ForgotPasswordPage },
      { path: 'mfa', component: MfaPage }
    ]
  },
  {
    path: '/',
    component: AppLayout,
    redirect: '/dashboard',
    children: [
      { path: 'dashboard', component: DashboardPage },
      { path: 'outbounds', component: OutboundsPage }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
