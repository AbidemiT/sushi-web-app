import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggle: false
  },
  mutations: {
    SET_TOGGLE(state) {
      state.toggle = !state.toggle;
    }
  },
  actions: {
    toggleClicked({
      commit
    }) {
      commit("SET_TOGGLE")
    }
  },
  getters: {
    toggleState: (state) => {
      return state.toggle;
    }
  }
});