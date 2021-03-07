import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $axios from "./request.js";
import VueSimpleValidator from "simple-vue-validator";

Vue.config.productionTip = false;

Vue.use(VueSimpleValidator, {
  mode: "manual"
});

store.$axios = $axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
