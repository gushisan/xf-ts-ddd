import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/interest",
    name: "Interest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/interest/interest.vue")
  },
  {
    path: "/lottery",
    name: "Lottery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/lottery/lottery.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/user.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
