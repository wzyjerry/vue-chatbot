import Vue from "vue";
import VueI18n from "vue-i18n";
import zhLocale from "@/lang/zh-CN";
import enLocale from "@/lang/en-US";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en-US",
  messages: {
    "zh-CN": zhLocale,
    "en-US": enLocale
  }
});
