import Vue from "vue";
import Vuex from "vuex";
import agent from "./modules/agent";
import entity from "./modules/entity";
import intent from "./modules/intent";
import user from "./modules/user";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    agent,
    entity,
    intent,
    user
  },
  strict: debug
});
