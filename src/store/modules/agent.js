import agent from "@/api/agent";

const actions = {
  create: async (_, data) => {
    await agent.create(data);
  },
  edit: async (_, { id, data }) => {
    await agent.edit(id, data);
  },
  view: async (_, id) => {
    return await agent.view(id);
  },
  remove: async (_, id) => {
    await agent.remove(id);
  },
  getList: async (_, id) => {
    return await agent.getList(id);
  }
};

export default {
  namespaced: true,
  actions
};
