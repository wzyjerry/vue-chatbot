import entity from "@/api/entity";

const actions = {
  create: async (_, { agentId, data }) => {
    await entity.create(agentId, data);
  },
  edit: async (_, { agentId, id, data }) => {
    await entity.edit(agentId, id, data);
  },
  view: async (_, { agentId, id }) => {
    return await entity.view(agentId, id);
  },
  remove: async (_, { agentId, id }) => {
    await entity.remove(agentId, id);
  },
  getList: async (_, { agentId, id }) => {
    return await entity.getList(agentId, id);
  }
};

export default {
  namespaced: true,
  actions
};
