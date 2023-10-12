<template>
  <div class="box">
    <!-- preserveAspectRatio="none"  不考虑图形比例 -->
    <div @click="add" style="width: 100%; height: 30%; background-color: red">
      {{ num }}
    </div>
    <svg
      preserveAspectRatio="none"
      viewBox="10 10 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="20" height="20" fill="skyblue"></rect>
    </svg>
  </div>
</template>
<script>
export default {
  name: "TestCom",
  inject: ["getGraph", "getNode"],
  data() {
    return {
      fill: "#fff",
      num: 0,
    };
  },
  mounted() {
    const node = this.getNode();
    // this.num = node.getData().num;
    // 监听数据改变事件
    node.on("change:data", ({ current }) => {
      this.num = current.num;
    });
  },
  methods: {
    add() {
      const node = this.getNode();
      const { num } = node.getData();
      node.setData({
        num: num + 1,
      });
    },
  },
};
</script>
<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 70%;
  }
  //   background: #000;
}
</style>
