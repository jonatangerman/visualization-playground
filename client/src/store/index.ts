import { createStore } from "vuex";

import line from "./modules/line";
import pie from "./modules/pie";
import area from "./modules/area";

export default createStore({
  state: () => ({
    isRealTime: false,
  }),
  mutations: {
    updateRealTime(state, newData) {
      state.isRealTime = newData;
    },
  },
  actions: {
    toggleRealTime({ commit, state }) {
      commit("updateRealTime", !state.isRealTime);
    },
  },
  modules: {
    line,
    pie,
    area,
  },
});
