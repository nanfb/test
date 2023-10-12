<template>
  <div id="app">
    <Header></Header>
    <Content />
  </div>
</template>

<script>
import Content from "./components/content/Content.vue";
import Header from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    Content,
    Header,
  },
};
</script>

<style lang="less" scoped>
@import url("./assets/reset.css");
</style>
