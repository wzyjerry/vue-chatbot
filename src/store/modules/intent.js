import intent from "@/api/intent";

const actions = {
  create: (_, { agentId, data }) => {
    return intent.create(agentId, data);
  },
  edit: (_, { agentId, id, data }) => {
    return intent.edit(agentId, id, data);
  },
  setting: (_, { agentId, id, data }) => {
    return intent.setting(agentId, id, data);
  },
  view: (_, { agentId, id }) => {
    return intent.view(agentId, id).then(response => {
      return response.data;
    });
  },
  remove: (_, { agentId, id }) => {
    return intent.remove(agentId, id);
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
