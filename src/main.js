import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
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

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
