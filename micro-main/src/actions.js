import { initGlobalState } from "qiankun";

// 应用通信
// 1. 声明共享数据
const initState = {
  main: "",
};
const actions = initGlobalState(initState);
export default actions;
