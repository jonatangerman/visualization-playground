import apiClient from "./../api";

export const storeProperties = {
  namespaced: true,
  mutations: {
    updateData(state, newData) {
      state.data = newData || state.default;
    },
    setId(state, id) {
      if (!state.id) {
        state.id = id;
      }
    },
    setName(state, data) {
      state.name = data;
    },
  },
  actions: {
    updateData({ commit }, data) {
      commit("updateData", data);
    },
    async fetchAll({ commit }, type: string) {
      const response = await apiClient.get(`/${type}`);
      const data = response.data;

      if (data[0]) {
        commit("setId", data[0].id);
        commit("setName", data[0].name);
      }
      commit("updateData", data[0]?.data);
    },
    async createRecord({ commit }, { type, data }) {
      const response = await apiClient.post(`/${type}`, { ...data });
      const record = response.data;
    },
    async updateRecord({ commit }, { type, data, id }) {
      const response = await apiClient.put(`/${type}/${id}`, data);
      const record = response.data;
      commit("updateData", record);
    },
  },
};

export interface chartStore {
  namespaced: boolean;
  mutations: {
    updateData: (state, data) => void;
    setId: (state, id) => void;
    setName: (state, data) => void;
  };
  actions: {
    updateData: ({ commit }, type: string) => void;
    fetchAll: ({ commit }, data) => void;
    createRecord: ({ commit }, { type, data }) => void;
    updateRecord: ({ commit }, { type, data, id }) => void;
  };
}
