import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      props: { titulo: 'Login' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/listado-libros',
      name: 'listado-libros',
      component: () => import('../views/ListadoLibrosView.vue'),
    }
  ]
})

export default router
