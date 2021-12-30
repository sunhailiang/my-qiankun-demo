import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/index.vue"),
  },
  {
    path: "/a",
    name: "a",
    component: () => import(/* webpackChunkName: "a" */ "../views/a.vue"),
  },
  {
    path: "/b",
    name: "b",
    component: () => import(/* webpackChunkName: "b" */ "../views/b.vue"),
  },
];

export default routes;
