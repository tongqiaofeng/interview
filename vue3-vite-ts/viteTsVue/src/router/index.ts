import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 扩展routes选项
export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean;
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
      meta: {
        title: "首页",
        icon: "el-icon-iceCream",
      },
    },
    {
      path: "/add",
      hidden: true,
      component: () => import("../views/AddTodo.vue"),
    },
  ] as AppRouteRecordRaw[],
});

// router.beforeEach((to, from, next) => {
//   console.log(to.path);
//   console.log(from.path);
//   console.log(next.name);
// });

export default router;
