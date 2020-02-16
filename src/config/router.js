import Vue from 'vue';
import Router from 'vue-router';

import IndexPage from '../pages/Index.vue';
import SearchPage from '../pages/Search.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: IndexPage,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchPage,
      meta: {
        title: 'Search',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;