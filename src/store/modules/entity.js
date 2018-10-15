import entity from "@/api/entity";

const actions = {
  getEntityList: async (_, { agentId, id }) => {
    return await entity.getEntityList(agentId, id);
  },
  createEntity: async (_, { agentId, data }) => {
    await entity.createEntity(agentId, data);
  }
};

export default {
  namespaced: true,
  actions
};
