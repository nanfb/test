import Vue from "vue";
import App from "./App.vue";
const bus = new Vue()
Vue.prototype.$bus = bus;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
