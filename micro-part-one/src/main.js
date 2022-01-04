import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import VueRouter from "vue-router";
import actions from "./actions";

Vue.config.productionTip = false;

// 确保主项目切到子项目路由时再去挂载项目
let router = null;
let app = null;
const isQiankun = window.__POWERED_BY_QIANKUN__;
function render(props = {}) {
  if (props) {
    actions.setActions(props);
  }
  const { container } = props;
  router = new VueRouter({
    base: isQiankun ? "/one/" : "/", // 如果是在主项目中被加载应用时，则改成跟主应用一样的base路由，否则，就按照本地的规则
    mode: isQiankun ? "history" : "hash",
    routes,
  });
  app = new Vue({
    store,
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app"); //存在乾坤容器吗？有就用，没有就用自己的
}

//独立运行，__POWERED_BY_QIANKUN__这个属性是乾坤暴露在windows上，判断当前的应用运行环境，如果不在乾坤中则独立运行，否则那就在乾坤之行钩子函数时执行渲染
if (!isQiankun) {
  render();
}
// 必须暴露这些钩子函数
export async function bootstrap() {
  console.log("one app bootstraped");
}
export async function mount(props) {
  //在自应用挂载时，会将乾坤的容器等参数塞进来
  render(props);
}
// 子应用卸载时，将不用的对象全部销毁
export async function unmount() {
  console.log("one app unmount");
  app.$destroy();
  app.$el.innerHTML = "";
  router = null;
  app = null;
}
