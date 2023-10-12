<template>
  <div class="home">
    <div class="sideBar">
      <SideBar :Graph="Graph"></SideBar>
    </div>
    <div id="container">
      <div ref="content" id="content"></div>
    </div>
    <div class="manipulate">
      <Manipulate></Manipulate>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import Manipulate from "./components/Manipulate";
import { initGraph } from "./X6";
// 插件
import { Snapline } from "@antv/x6-plugin-snapline"; // 对齐线
import { Transform } from "@antv/x6-plugin-transform"; // 节点尺寸修改
import { register } from "@antv/x6-vue-shape";

export default {
  name: "Home",
  components: {
    SideBar,
    Manipulate,
  },
  data() {
    return {
      Graph: null,
    };
  },
  mounted() {
    this.Graph = initGraph(this.$refs.content);
    this.setGraphUse();
  },
  methods: {
    setGraphUse() {
      this.Graph.use(
        new Snapline({
          enabled: true,
        })
      );
      this.Graph.use(
        new Transform({
          resizing: {
            enabled: true,
            minWidth: 1,
            maxWidth: 200,
            minHeight: 1,
            maxHeight: 150,
            orthogonal: false,
            restrict: false,
            preserveAspectRatio: false,
          },
          rotating: {
            enabled: true,
            grid: 15,
          },
        })
      );
      this.Graph.addNode({
        shape: "rect",
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        label: "rect",
        attrs: {
          body: {
            fill: "red",
          },
        },
      });
    },
  },
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  // flex-direction: column;
  .sideBar,
  .manipulate {
    width: 18%;
    height: 100%;
  }
  #container {
    flex: 1;
    #content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
