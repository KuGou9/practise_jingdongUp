import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
    // name: 'app',
    // component: () => import('../App.vue'),
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue'),
  },
  {
    path: '/classify',
    component: () => import('views/classify/Classify.vue'),
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart.vue'),
  },
  {
    path: '/me',
    component: () => import('views/me/Me.vue'),
  },
  {
    path: '/detail/:id',
    // path: '/detail',
    component: () => import('views/detail/Detail.vue'),
    meta: {
      title: '商品详情',
    },
  },
  // {
  //   path: '/test',
  //   component: () => import('views/classify/better-scroll基本使用.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
