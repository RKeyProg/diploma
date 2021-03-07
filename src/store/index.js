import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import tasks from "./modules/tasks";
import user from "./modules/user";

export default new Vuex.Store({
  modules: {
    tasks,
    user
  }
});
