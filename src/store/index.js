import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "./modules/user";
import task from "./modules/task";
import student from "./modules/student";
import info from "./modules/info";
import visual from "./modules/visual";
import tooltips from "./modules/tooltips";

export default new Vuex.Store({
  modules: {
    user,
    task,
    student,
    info,
    visual,
    tooltips
  }
});
