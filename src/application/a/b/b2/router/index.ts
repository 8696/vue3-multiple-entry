import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "a-b-b2-index-page" */ '../page/index.page.vue')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "a-b-b2-home-page" */ '../page/home.page.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


export default router
