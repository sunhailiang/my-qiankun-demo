<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <!-- 自己的路由 -->
      <el-menu-item index="/">主框架路由</el-menu-item>
      <!-- 子应用的路由 -->
      <el-menu-item index="part-one">第一子应用</el-menu-item>
      <el-menu-item index="part-two">第二子应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="part-one"></div>
    <div id="part-two"></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
