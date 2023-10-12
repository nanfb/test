<template>
  <div id="sidebarView">
    <div class="dnd-app">
      <div class="dnd-wrap" ref="dndW">
        <div type="rect" class="dnd-rect" @mousedown="startDrag($event)">
          Rect
        </div>
        <div type="circle" class="dnd-circle" @mousedown="startDrag($event)">
          Circle
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Dnd } from "@antv/x6-plugin-dnd";
export default {
  name: "SideBar",
  data() {
    return {
      dnd: null,
    };
  },
  props: ["Graph"],
  mounted() {
    this.initDnd();
  },
  methods: {
    initDnd() {
      console.log(this.$refs.dndW);
      this.dnd = new Dnd({
        target: this.Graph,
        scaled: false,
        animation: true,
      });
    },
    startDrag(e) {
      const target = e.target;
      const type = target.getAttribute("type");
      const node =
        type === "rect"
          ? this.Graph.createNode({
              width: 100,
              height: 40,
              label: "Rect",
              attrs: {
                body: {
                  stroke: "#8f8f8f",
                  strokeWidth: 1,
                  fill: "#fff",
                  rx: 6,
                  ry: 6,
                },
              },
            })
          : this.Graph.createNode({
              width: 70,
              height: 60,
              shape: "circle",
              label: "Circle",
              attrs: {
                body: {
                  stroke: "#8f8f8f",
                  strokeWidth: 1,
                  fill: "#fff",
                },
              },
            });
      // console.dir(this.dnd.start.toString());
      // debugger;
      this.dnd.start(node, e);
    },
  },
};
</script>
<style lang="less" scoped>
#sidebarView {
  width: 100%;
  height: 100%;
  background-color: #e4d484;
  .app-content {
    flex: 1;
    height: 240px;
    margin-right: 8px;
    margin-left: 8px;
    box-shadow: 0 0 10px 1px #e9e9e9;
  }

  .dnd-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    padding: 16px;
    border: 1px solid #f0f0f0;
    user-select: none;

    .dnd-rect {
      width: 100px;
      height: 40px;
      margin: 16px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #8f8f8f;
      border-radius: 6px;
      cursor: move;
    }

    .dnd-circle {
      width: 70px;
      height: 60px;
      margin: 16px;
      line-height: 60px;
      text-align: center;
      border: 1px solid #8f8f8f;
      border-radius: 100%;
      cursor: move;
    }
  }
}
</style>
