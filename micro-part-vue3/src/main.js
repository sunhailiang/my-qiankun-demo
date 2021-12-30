import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import routes from "./router";
import store from "./store";

let history;
let router;
let app;
function render(props = {}) {
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/vue3/" : "/");
  router = createRouter({
    history,
    routes,
    mode: "history",
  });
  app = createApp(App);
  const { container } = props;
  app
    .use(router)
    .use(store)
    .mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("one app bootstraped");
}
export async function mount(props) {
  console.log("one app mount", props);
  render(props);
}
export async function unmount() {
  console.log("one app unmount");
  history = null;
  router = null;
  app = null;
}
