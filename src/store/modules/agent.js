import agent from "@/api/agent";

const actions = {
  create: (_, data) => {
    return agent.create(data);
  },
  edit: (_, { id, data }) => {
    return agent.edit(id, data);
  },
  view: (_, id) => {
    return agent.view(id).then(response => {
      return response.data;
    });
  },
  remove: (_, id) => {
    return agent.remove(id);
  },
  list: () => {
    return agent.list().then(response => {
      return response.data;
    });
  }
};

export default {
  namespaced: true,
  actions
};
