import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    login: false,
    role: "",
    url: "https://evening-shelf-49635.herokuapp.com/"
  },
  getters: {
    all(state) {
      return state;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    login(state, { role, name }) {
      Vue.set(state, "role", role);
      console.log(state);
      Vue.set(state, "name", name);
      console.log(name);
    }
  }
});
