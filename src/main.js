import Vue from "vue";
import App from "./App.vue";
import 'default-passive-events' // chrome更新后，事件监听更新新策略，X6内部没有处理，控制台报警
const bus = new Vue()
Vue.prototype.$bus = bus;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
