import Vue from 'vue';
import VueRouter from 'vue-router';
import My from '@/views/My';
import First from '@/views/First';
import Order from '@/views/Order';
import Class from '@/views/Class';
import One from '@/views/second/One';
import Two from '@/views/second/Two';
import Three from '@/views/second/Three';
import Four from '@/views/second/Four';
import Third1 from '@/views/second/third/Third1';
import Third2 from '@/views/second/third/Third2';
import Third3 from '@/views/second/third/Third3';
import Third4 from '@/views/second/third/Third4';

import TheDefault from '@/views/TheDefault';
Vue.use(VueRouter);

const routes = [
  {
    path: '/class',
    component: Class,
    children: [
      { path: 'one', component: One },
      { path: 'two', component: Two },
      { path: 'three', component: Three },
      {
        path: 'four',
        component: Four,
        children: [
          { path: 'third1', component: Third1 },
          { path: 'third2', component: Third2 },
          { path: 'third3', component: Third3 },
          { path: 'third4', component: Third4 },
        ],
      },
    ],
  },
  {
    path: '/first',
    component: First,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/my',
    component: My,
  },
  {
    path: '*',
    component: TheDefault,
  },
  {
    path: '/',
    redirect: '/class',
  },
];
const router = new VueRouter({
  routes,
});

export default router;
