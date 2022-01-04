import index from "../views/index.vue";
import a from "../views/a.vue";
import b from "../views/b.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/a",
    name: "a",
    component: a,
  },
  {
    path: "/b",
    name: "b",
    component: b,
  },
];

export default routes;
