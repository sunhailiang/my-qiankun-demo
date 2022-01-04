<template>
  <div>
    <h1>B页面</h1>
    <button @click="topage('a')">A页面</button>
    <button @click="topage('b')">B页面</button>
  </div>
</template>

<script>
export default {
  name: "b",
  methods: {
    topage(a) {
      console.log("没执行？？");
      if (a === "a") {
        this.$router.push("/a");
        console.log("看下路由", this.$route);
      }
      if (a === "b") {
        this.$router.push("/b");
        console.log("看下路由", this.$route);
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
