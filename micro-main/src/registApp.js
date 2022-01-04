// 注册app
import { registerMicroApps, start } from "qiankun";
import store from "./store";

// 加载状态
const loader = (loadding) => {
  console.log(loadding);
};
const apps = [
  {
    name: "one",
    entry: "http://192.168.8.117:8081/", // 根据地址加载子应用，解析js，所以子应用必须支持跨域，让我主应用可以加载的到
    container: "#container", // 将子应用挂载到哪个元素？
    activeRule: "/one", // 激活子应用的路由
    loader, // 加载状态
  },
  {
    name: "two",
    entry: "http://192.168.8.117:8082/",
    container: "#container",
    activeRule: "/two",
    loader,
    props: {
      mainStore: store, // 将主项目的store注入到子项目中
    },
  },
  {
    name: "vue3",
    entry: "http://192.168.8.117:8083/",
    container: "#container",
    activeRule: "/vue3",
    loader,
  },
];

// 注册
registerMicroApps(apps, {
  //加载前
  beforeLoad: (params) => {
    console.log("加载前", params);
  },
  //挂载前
  beforeMount: (params) => {
    console.log("挂载前", params);
  },
  // 挂载后
  afterMount: (params) => {
    console.log("挂载后", params);
  },
  // 卸载前
  beforeUnmount: (params) => {
    console.log("卸载前", params);
  },
  // 卸载后
  afterUnmount: (params) => {
    console.log("卸载后", params);
  },
});

// 开启
start({
  sandbox: {
    // experimentalStyleIsolation: true, // 添加挂载容器，你可以理解为scoped
    strictStyleIsolation: true, // showDom思路，完全隔离dom，无法互相访问
  },
});
