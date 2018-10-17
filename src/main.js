import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@/db";

Vue.config.productionTip = false;
if (typeof String.prototype.trim === "undefined") {
  String.prototype.trim = function() {
    return String(this).replace(/^\s+|\s+$/g, "");
  };
}
if (typeof String.prototype.getParam === "undefined") {
  String.prototype.getParam = function(name) {
    const pattern = new RegExp(`[?&]${name}=([^&]+)`, "g");
    const matcher = pattern.exec(String(this));
    let items = null;
    if (null != matcher) {
      try {
        items = decodeURIComponent(decodeURIComponent(matcher[1]));
      } catch (e) {
        try {
          items = decodeURIComponent(matcher[1]);
        } catch (e) {
          items = matcher[1];
        }
      }
    }
    return items;
  };
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
