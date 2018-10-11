import agent from "@/api/agent";

const state = {
  languages: undefined,
  timeZones: undefined
};

const actions = {
  loadLanguages: async ({ state, commit }) => {
    if (state.languages === undefined) {
      commit("setLanguages", await agent.getLanguages());
    }
  },
  loadTimeZones: async ({ state, commit }) => {
    if (state.timeZones === undefined) {
      commit("setTimeZones", await agent.getTimeZones());
    }
  },
  createAgent: async (_, data) => {
    agent.createAgent(data);
  },
  getAgentList: async (_, id) => {
    return agent.getAgentList(id);
  }
};

const mutations = {
  setLanguages: (state, languages) => {
    state.languages = languages;
  },
  setTimeZones: (state, timeZones) => {
    state.timeZones = timeZones;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
