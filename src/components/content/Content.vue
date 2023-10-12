<template>
  <div class="home">
    <button @click="handle">add</button>
    <div class="sideBar">
      <SideBar ref="sideBar"></SideBar>
    </div>
    <div id="container">
      <div ref="content" id="content"></div>
    </div>
    <div class="manipulate"><Manipulate></Manipulate>graph</div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import Manipulate from "./components/Manipulate";
import { initGraph } from "./X6";
// 插件
import { Snapline } from "@antv/x6-plugin-snapline"; // 对齐线
import { Transform } from "@antv/x6-plugin-transform"; // 节点尺寸修改
export default {
  name: "Home",
  components: {
    SideBar,
    Manipulate,
  },
  data() {
    return {
      graph: null,
    };
  },
  mounted() {
    this.graph = initGraph(this.$refs.content);
    this.graph && this.$refs.sideBar.initDnd();
    this.setGraphUse();
    // 事件注册
    this.graph.on("node:click", ({ e, x, y, node, view }) => {
      console.log("node:click", node, view);
    });
  },
  methods: {
    setGraphUse() {
      this.graph.use(
        new Snapline({
          enabled: true,
        })
      );
      this.graph.use(
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
    },

    handle() {
      const nodes = this.graph.getNodes();
      if (nodes.length) {
        console.log(nodes);
        nodes.forEach((node) => {
          const { num } = node.getData();
          node.setData({
            num: num + 1,
          });
        });
      }
    },
  },
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  height: calc(100vh - 30px);
  display: flex;
  // flex-direction: column;
  .sideBar,
  .manipulate {
    min-width: 120px;
    width: 18%;
    height: 100%;
  }
  #container {
    width: calc(100% - 240px);
    min-width: 150px;
    #content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
