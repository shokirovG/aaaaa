import { createRouter, createWebHistory } from "vue-router";
import MainLayout from '../layouts/MainLayout.vue';
import PageOne from "../views/PageOne.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: MainLayout,
      children: [
        {
          path: '/login',
          name: 'main',
          component:PageOne
        }
      ]
    }
  ]
})

export default router;