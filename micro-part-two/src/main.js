import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
const isQiankun = window.__POWERED_BY_QIANKUN__;
let router = null;
let app = null;
function render(props = {}) {
  // 传入主项目store
  const { container, mainStore } = props;
  router = new VueRouter({
    base: isQiankun ? "/two/" : "/", // 如果是在主项目中被加载应用时，则改成跟主应用一样的base路由，否则，就按照本地的规则
    mode: "history",
    routes,
  });
  if (props) {
    // 为主项目的store注册响应式
    Vue.observable(mainStore);
    Vue.prototype.$mainStore = mainStore;
  }
  // 获取主项目的store
  app = new Vue({
    store,
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app"); //存在乾坤容器吗？有就用，没有就用自己的
}

if (!isQiankun) {
  render(); // 独立运行
}
export async function bootstrap() {
  console.log("two app bootstraped");
}
export async function mount(props) {
  console.log("two app mount");
  render(props);
}
export async function unmount() {
  console.log("two app unmount");
  app.$destroy();
  app = null;
  router = null;
}
