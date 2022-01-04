<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座-放置主框架自己的东西 -->
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/one">子应用</el-menu-item>
      <el-menu-item index="/two">子应用</el-menu-item>
      <el-menu-item index="/vue3">vue3</el-menu-item>
    </el-menu>
    <el-input @input="setval" v-model="main"></el-input>
    <router-view />
    <div id="container"></div>
  </div>
</template>
<script>
import actions from "./actions";
export default {
  data() {
    return {
      main: "",
    };
  },
  methods: {
    setval() {
      let main = this.main;
      // Actions方案
      actions.setGlobalState({ main });
      // vuex方案
      this.$store.commit("setToken", main);
    },
  },
  watch: {
    // vuex方案实时监听
    "$store.state.token": function(val, pre) {
      console.log("监听", val, "pre", pre);
      this.main = val;
    },
  },
  mounted() {
    actions.onGlobalStateChange((state, preState) => {
      console.log("当前值", state);
      console.log("上一个值", preState);
      this.main = state.main;
    });
  },
};
</script>

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
