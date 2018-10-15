import agent from "@/api/agent";

const actions = {
  createAgent: async (_, data) => {
    await agent.createAgent(data);
  },
  editAgent: async (_, { id, data }) => {
    await agent.editAgent(id, data);
  },
  viewAgent: async (_, id) => {
    return await agent.viewAgent(id);
  },
  getAgentList: async (_, id) => {
    return await agent.getAgentList(id);
  }
};

export default {
  namespaced: true,
  actions
};
