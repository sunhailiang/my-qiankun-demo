<template>
  <div class="vue3">
    VUE3
    <div>
      <button @click="$router.push('/a')">A页面</button>
      <button @click="$router.push('/b')">B页面</button>
    </div>
    <input />
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
};
</script>
