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
];
export default routes;
