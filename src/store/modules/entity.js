import entity from "@/api/entity";

const actions = {
  create(_, { agentId, data }) {
    return entity.create(agentId, data);
  },
  edit(_, { agentId, id, data }) {
    return entity.edit(agentId, id, data);
  },
  view(_, { agentId, id }) {
    return entity.view(agentId, id).then(response => {
      return response.data;
    });
  },
  remove(_, { agentId, id }) {
    return entity.remove(agentId, id);
  },
  list(_, { agentId }) {
    return entity.list(agentId).then(response => {
      return response.data;
    });
  }
};

export default {
  namespaced: true,
  actions
};
