import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/:lang",
      name: "home",
      component: () => import(/* webpackChunkName: "Home" */ "./views/Home.vue")
    },
    {
      path: "/:lang/agent",
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
          name: "agentEdit",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Edit.vue")
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
        },
        {
          path: "view/:agentId/entity/edit/:entityId",
          name: "optionEntityEdit",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Edit.vue")
          }
        },
        {
          path: "view/:agentId/intent/index",
          name: "optionIntentIndex",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Index.vue")
          }
        },
        {
          path: "view/:agentId/intent/create",
          name: "optionIntentCreate",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Create.vue")
          }
        },
        {
          path: "view/:agentId/intent/edit/:intentId",
          name: "optionIntentEdit",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Edit.vue")
          }
        },
        {
          path: "view/:agentId/intent/menu/:intentId",
          name: "optionIntentMenu",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Menu.vue")
          }
        },
        {
          path: "view/:agentId/train/index",
          name: "optionTrainIndex",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionTrain" */ "./views/agent/option/train/Index.vue")
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.params.lang === undefined) {
    next({
      name: "home",
      params: { lang: "en-US" }
    });
  } else {
    next();
  }
});

export default router;
