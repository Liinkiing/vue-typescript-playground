import Vue from 'vue';
import Router from 'vue-router';
import Lobby from './views/Lobby.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Lobby,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
