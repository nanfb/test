import { Graph } from "@antv/x6";
export function initGraph(el) {
    // 基础配置
    return new Graph({
        container: el,
        autoResize: true,
        panning: {
            enabled: true,
        },
        mousewheel: {
            enabled: true,
            modifiers: ["ctrl", "meta"],
        },
        selecting: {
            //选择配置
            enabled: true,
            multiple: true,
            rubberband: true, // 框选
            modifiers: ["alt", "ctrl"], //组合快捷键
            movable: true, //选中的节点是否可以移动
            showNodeSelectionBox: true, //显示框
            // showEdgeSelectionBox: true, //显示框
        },
        connecting: {
            // 连线配置
            snap: true,
            router: {
                name: "manhattan", // orth(正交) | oneSide(受限正交) | manhattan(智能正交) | metro(智能地铁) | er(实体关系)
                args: {
                    padding: 10,
                    step: 5, // 步长(计算精度，如果太小会造成拖拽的时候产生性能问题，要不就拖拽的时候降级为 orth )
                },
            },
            connector: {
                // 连线样式
                name: "jumpover", // normal(直线) | rounded(圆角) | smooth(平滑) | jumpover(跳跃)
                args: {
                    type: "gap",
                },
            },
            // allowBlank: false
        },
        grid: {
            visible: true,
            size: 5,
        },
        background: {
            color: "#fff", // 设置画布背景颜色
        },
    });
}
