<template>
  <div>
    <h1>A页面</h1>
    <button @click="$router.push('/a')">A页面</button>
    <button @click="$router.push('/b')">B页面</button>
  </div>
</template>

<script>
export default {
  name: "a",
};
</script>

<style lang="less" scoped></style>
