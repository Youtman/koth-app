import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    {
      path: "/group",
      name: "group",
      component: () => import("./components/Group")
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./components/Team")
    },
    {
      path: "/match",
      name: "match",
      component: () => import("./components/Match")
    }
  ]
});
