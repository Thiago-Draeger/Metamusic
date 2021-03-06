import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: Login
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    meta:{
      requiresAuth: false,
    },
    children: [
      {
        path: '/perfil',
        name: 'Perfil',
        component: () => import('../views/Perfil.vue')
      },
      {
        path: '/artistas',
        name: 'Artistas',
        component: () => import('@/views/Artistas.vue')
      },
      {
        path: '/Angra',
        name: 'Angra',
        component: () => import('@/views/Angra.vue')
      },
      {
        path: '/Shaman',
        name: 'Shaman',
        component: () => import('@/views/Shaman.vue')
      },
      {
        path: '/Edguy',
        name: 'Edguy',
        component: () => import('@/views/Edguy.vue')
      },
      {
        path: '/BlindGuardian',
        name: 'BlindGuardian',
        component: () => import('@/views/BlindGuardian.vue')
      },
      {
        path: '/Helloween',
        name: 'Helloween',
        component: () => import('@/views/Helloween.vue')
      },
      {
        path: '/Synfonia',
        name: 'Synfonia',
        component: () => import('@/views/Synfonia.vue')
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router

