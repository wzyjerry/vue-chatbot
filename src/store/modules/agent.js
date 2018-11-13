import agent from "@/api/agent";

const actions = {
  create: async (_, data) => {
    agent.create(data);
  },
  edit: async (_, { id, data }) => {
    agent.edit(id, data);
  },
  view: async (_, id) => {
    return agent.view(id).then(response => {
      return response.data;
    });
  },
  remove: async (_, id) => {
    agent.remove(id);
  },
  list: async () => {
    return agent.list().then(response => {
      return response.data;
    });
  }
};

export default {
  namespaced: true,
  actions
};
