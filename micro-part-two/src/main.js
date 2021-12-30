import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export async function bootstrap() {
  console.log("two app bootstraped");
}
export async function mount() {
  console.log("two app mount");
}
export async function unmount() {
  console.log("two app unmount");
}
