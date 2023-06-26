import * as VueRouter from 'vue-router';

import About from './windows/About.vue';
import WindowMain from './windows/WindowMain.vue';

const routes = [
  {
    path: '/',
    component: WindowMain
  },
  { path: '/about', component: About }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});
