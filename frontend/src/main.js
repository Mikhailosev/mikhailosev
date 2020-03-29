import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import axios from "axios";
import router from "./router";
import i18n from "./i18n";

const _ = require("lodash");

Vue.config.productionTip = false;

new Vue({
  store,
  axios,
  router,
  i18n,
  _,
  render: h => h(App)
}).$mount("#app");
