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
          name: "agentIndex",
          component: () =>
            import(/* webpackChunkName: "Agent" */ "./views/agent/Index.vue")
        },
        {
          path: "create",
          name: "agentCreate",
          component: () =>
            import(/* webpackChunkName: "Agent" */ "./views/agent/Create.vue")
        },
        {
          path: "view/:agentId",
          name: "agentView",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Setting.vue")
          }
        },
        {
          path: "view/:agentId/entity/index",
          name: "optionEntityIndex",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Index.vue")
          }
        },
        {
          path: "view/:agentId/entity/create",
          name: "optionEntityCreate",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Create.vue")
          }
        }
      ]
    }
  ]
});
