import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/view/SearchView.vue'),
      // Help to guide which query should be passed to this view
      props: (route) => ({ query: route.query.q }),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/view/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/view/NotFoundView.vue'),
    },
  ],
});

export default router;
