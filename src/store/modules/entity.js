import entity from "@/api/entity";

const actions = {
  async create(_, { agentId, data }) {
    await entity.create(agentId, data);
  },
  async edit(_, { agentId, id, data }) {
    await entity.edit(agentId, id, data);
  },
  async view(_, { agentId, id }) {
    return await entity.view(agentId, id);
  },
  async remove(_, { agentId, id }) {
    await entity.remove(agentId, id);
  },
  async list(_, { agentId }) {
    return await entity.list(agentId);
  }
};

export default {
  namespaced: true,
  actions
};
