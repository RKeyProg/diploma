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
    path: "/Visualization",
    name: "Visualization",
    components: {
      default: () => import("../views/Visualization.vue"),
      sideBar: sideBar
    }
  },
  {
    path: "/tasks",
    name: "Tasks",
    components: {
      default: () => import("../views/Tasks.vue"),
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
