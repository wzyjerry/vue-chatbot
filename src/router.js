import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/:lang/interactive/:agentId",
      name: "interactive",
      component: () =>
        import(/* webpackChunkName: "Interactive" */ "./views/Interactive.vue")
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
        import(/* webpackChunkName: "User" */ "./views/user/Regist.vue")
    },
    {
      path: "/:lang/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "User" */ "./views/user/Login.vue")
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
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/Edit.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/entity",
          name: "optionEntityIndex",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Index.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/entity/create",
          name: "optionEntityCreate",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Create.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/entity/:entityId",
          name: "optionEntityEdit",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionEntity" */ "./views/agent/option/entity/Edit.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/intent",
          name: "optionIntentIndex",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Index.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/intent/create",
          name: "optionIntentCreate",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Create.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/intent/:intentId",
          name: "optionIntentEdit",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Edit.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/intent/menu/:intentId",
          name: "optionIntentMenu",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionIntent" */ "./views/agent/option/intent/Menu.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
          }
        },
        {
          path: ":agentId/train",
          name: "optionTrainIndex",
          components: {
            asideLeft: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideLeft.vue"),
            default: () =>
              import(/* webpackChunkName: "OptionTrain" */ "./views/agent/option/train/Index.vue"),
            asideRight: () =>
              import(/* webpackChunkName: "Option" */ "./views/agent/option/AsideRight.vue")
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
      params: { lang: localStorage.getItem("lang") || "en-US" }
    });
  } else {
    next();
  }
});

export default router;
