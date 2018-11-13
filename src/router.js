import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/:lang/test",
      name: "test",
      component: () => import(/* webpackChunkName: "Test" */ "./views/Test.vue")
    },
    {
      path: "/:lang",
      name: "home",
      component: () => import(/* webpackChunkName: "Home" */ "./views/Home.vue")
    },
    {
      path: "/:lang/regist",
      name: "regist",
      component: () =>
        import(/* webpackChunkName: "User" */ "./views/Regist.vue")
    },
    {
      path: "/:lang/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "User" */ "./views/Login.vue")
    },
    {
      path: "/:lang/agent",
      component: () =>
        import(/* webpackChunkName: "Agent" */ "./views/agent/Agent.vue"),
      children: [
        {
          path: "",
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
          path: ":agentId",
          name: "agentEdit",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Edit.vue")
          }
        },
        {
          path: ":agentId/entity",
          name: "optionEntityIndex",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Index.vue")
          }
        },
        {
          path: ":agentId/entity/create",
          name: "optionEntityCreate",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Create.vue")
          }
        },
        {
          path: ":agentId/entity/:entityId",
          name: "optionEntityEdit",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Edit.vue")
          }
        },
        {
          path: ":agentId/intent",
          name: "optionIntentIndex",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Index.vue")
          }
        },
        {
          path: ":agentId/intent/create",
          name: "optionIntentCreate",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Create.vue")
          }
        },
        {
          path: ":agentId/intent/:intentId",
          name: "optionIntentEdit",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Edit.vue")
          }
        },
        {
          path: ":agentId/intent/menu/:intentId",
          name: "optionIntentMenu",
          components: {
            aside: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Aside.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Menu.vue")
          }
        },
        {
          path: ":agentId/train",
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
