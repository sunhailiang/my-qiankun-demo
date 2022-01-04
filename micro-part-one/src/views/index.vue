<template>
  <div class="one">
    <h1>one</h1>
    <button @click="topage('a')">A页面</button>
    <button @click="topage('b')">B页面</button>
    <br />
    <input v-model="main" @input="setState()" />
  </div>
</template>

<script>
import actions from "../actions";
export default {
  name: "componentName",
  data() {
    return {
      main: "",
    };
  },
  methods: {
    topage(a) {
      if (a === "a") {
        this.$router.push({ path: "/a" });
      }
      if (a === "b") {
        this.$router.push({ path: "/b" });
      }
    },
    setState() {
      const main = this.main;
      actions.setGlobalState({ main });
    },
  },
  mounted() {
    actions.onGlobalStateChange((state) => {
      const { main } = state;
      this.main = main;
    });
  },
};
</script>

<style lang="less" scoped>
.one {
  text-align: center;
}
</style>
