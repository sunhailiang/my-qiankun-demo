<template>
  <div>
    <button @click="$router.push('/a')">A页面</button>
    <button @click="$router.push('/b')">B页面</button>
  </div>
</template>

<script>
export default {
  name: "a",
  methods: {},
};
</script>

<style lang="less" scoped></style>
