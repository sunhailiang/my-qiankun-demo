import { createApp } from "vue";
import App from "./App.vue";
import {
  createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import routes from "./router";
import store from "./store";

let history;
let router;
let app;
const isQiankun = window.__POWERED_BY_QIANKUN__;
function render(props = {}) {
  history = isQiankun
    ? createWebHistory(isQiankun ? "/vue3/" : "/")
    : createWebHashHistory(isQiankun ? "/vue3/" : "/");
  router = createRouter({
    history,
    routes,
  });
  app = createApp(App);
  const { container } = props;
  app
    .use(router)
    .use(store)
    .mount(container ? container.querySelector("#app") : "#app");
}

if (!isQiankun) {
  render();
}

export async function bootstrap() {
  console.log("vue3 app bootstraped");
}
export async function mount(props) {
  console.log("vue3 app mount", props);
  render(props);
}
export async function unmount() {
  console.log("vue3 app unmount");
  history = null;
  router = null;
  app = null;
}
