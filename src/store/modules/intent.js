import intent from "@/api/intent";

const actions = {
  create: async (_, { agentId, data }) => {
    await intent.create(agentId, data);
  },
  edit: (_, { agentId, id, data }) => {
    return intent.edit(agentId, id, data);
  },
  setting: async (_, { agentId, id, data }) => {
    await intent.setting(agentId, id, data);
  },
  view: async (_, { agentId, id }) => {
    return await intent.view(agentId, id);
  },
  remove: async (_, { agentId, id }) => {
    await intent.remove(agentId, id);
  },
  list(_, { agentId }) {
    return intent.list(agentId).then(response => {
      return response.data;
    });
  }
};

export default {
  namespaced: true,
  actions
};
