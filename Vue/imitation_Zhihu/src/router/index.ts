import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Layout from '@/layouts/index.vue';

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index/Home.vue"),
    meta: {
      title: "首页",
    },
  },
  // {
  //   path: '/admin',
  //   component: Layout,
  //   redirect: '/index',
  //   children: [{
  //       path: '/index',
  //       name: '首页',
  //       icon: new URL('../assets/imgs/menu-icon/index.png',
  //         import.meta.url).href,
  //       component: () => import('@/views/index/index.vue'),
  //       meta: {
  //         title: '首页',
  //         name: "index"
  //       }
  //     }, {
  //       path: '/data',
  //       name: '基础数据管理',
  //       icon: new URL('../assets/imgs/menu-icon/msg-search.png',
  //         import.meta.url).href,
  //       meta: {
  //         title: '基础数据管理'
  //       },
  //       children: [{
  //           path: '/data/shop',
  //           name: '店铺管理',
  //           component: () => import('@/views/data/shop.vue'),
  //           meta: {
  //             title: '店铺管理',
  //             name: "shop"
  //           }
  //         },
  //       ]
  //     },
  //     {
  //       path: '/purchase',
  //       name: '采购管理',
  //       icon: new URL('../assets/imgs/menu-icon/cargo.png',
  //         import.meta.url).href,
  //       meta: {
  //         title: '采购管理'
  //       },
  //       children: [{
  //           path: '/purchase/enter',
  //           name: '采购单录入',
  //           component: () => import('@/views/purchase/purchase-enter.vue'),
  //           meta: {
  //             title: '采购单录入',
  //             name: "purchaseEnter"
  //           }
  //         },
  //       ]
  //     },
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // 路由跳转,页面回到顶部
  scrollBehavior: (to, from, savePosition) => {
    if (savePosition) {
      return savePosition;
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
