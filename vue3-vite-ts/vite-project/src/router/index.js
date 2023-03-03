import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Layout from '../layouts/index.vue'

// 工厂函数方式创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      component: () => import('views/home.vue')
    }]
  }]
})

export default router