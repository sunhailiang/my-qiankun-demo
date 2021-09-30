<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <!-- 基座-放置主框架自己的东西 -->
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/one">子应用</el-menu-item>
      <el-menu-item index="/two">子应用</el-menu-item>
    </el-menu>
    <router-view />
    <div id="one"></div>
    <div id="two"></div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
