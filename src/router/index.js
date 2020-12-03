import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import sideBar from "../components/sideBar";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      sideBar: sideBar
    }
  },
  {
    path: "/about",
    name: "About",
    components: {
      default: () => import("../views/About.vue"),
      sideBar: sideBar
    }
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: () => import("../views/Login.vue"),
      sideBar: sideBar
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
