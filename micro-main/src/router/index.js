import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

import {registerMicroApps,start} from 'qiankun'

const apps=[
  {
    name:'one',
    entry:'', // 根据地址加载子应用，解析js，所以子应用必须支持跨域，让我主应用可以加载的到
    container:'#one', // 将子应用挂载到哪个元素？
    activeRule:'/one',// 激活子应用的路由
  },
  {
    name:'two',
    entry:'', // 根据地址加载子应用，解析js，所以子应用必须支持跨域，让我主应用可以加载的到
    container:'#two', // 将子应用挂载到哪个元素？
    activeRule:'/two',// 激活子应用的路由
  }
]
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
