/*
 * @Description: wcy
 * @Author: cy2020
 * @Date: 2022-02-19 14:30:10
 * @LastEditTime: 2022-03-04 09:59:43
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home/index.vue')
      },
      {
        path: '/category/:id',
        component: () => import('../views/Category/index.vue')
      },
      {
        path: '/category/sub/:id',
        component: () => import('../views/Category/sub.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/Goods/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => {
    return { left: 0, top: 0 }
  }
})

export default router
