import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import sideBar from "../components/sideBar";
import store from "../store";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    components: {
      default: () => import("../views/Login.vue"),
      sideBar: sideBar
    },
    meta: {
      public: true
    }
  },
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      sideBar: sideBar
    }
  },
  {
    path: "/contacts",
    name: "Contacts",
    components: {
      default: () => import("../views/Contacts.vue"),
      sideBar: sideBar
    }
  },
  {
    path: "/visualizationTask",
    name: "VisualizationTask",
    components: {
      default: () => import("../views/VisualizationTask.vue"),
      sideBar: sideBar
    }
  },
  {
    path: "/personalAccount",
    name: "PersonalAccount",
    components: {
      default: () => import("../views/PersonalAccount.vue"),
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
    path: "/task",
    name: "Task",
    components: {
      default: () => import("../views/CurrentTaskPage.vue"),
      sideBar: sideBar
    }
  },
  {
    path: "/materials",
    name: "Materials",
    components: {
      default: () => import("../views/Materials.vue"),
      sideBar: sideBar
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
  // baseURL: "http://172.20.10.4:8000/api"
});

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(route => route.meta.public);
  const isUserLoggedIn = store.getters["user/userIsLoggedIn"];

  if (isPublicRoute === false && isUserLoggedIn === false) {
    const token = localStorage.getItem("token");

    guard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      const response = await guard.get("/user");
      store.dispatch("user/login", await response.data.user);
      next();
    } catch (error) {
      router.replace("/login");
      localStorage.removeItem("token");
    }
  } else {
    next();
  }
});

export default router;
