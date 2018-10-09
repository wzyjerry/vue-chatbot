import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/agent",
      name: "agent",
      component: () =>
        import(/* webpackChunkName: "Agent" */ "./views/agent/Agent.vue"),
      children: [
        {
          path: "index",
          alias: "",
          name: "agentIndex",
          component: () =>
            import(/* webpackChunkName: "Agent" */ "./views/agent/Index.vue")
        },
        {
          path: "create",
          name: "agentCreate",
          components: {
            default: () =>
              import(/* webpackChunkName: "Agent" */ "./views/agent/Create.vue"),
            aside: () =>
              import(/* webpackChunkName: "Agent" */ "./views/agent/Aside.vue")
          }
        }
      ]
    }
  ]
});
