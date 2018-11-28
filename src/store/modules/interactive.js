import interactive from "@/api/interactive";

const actions = {
  question: (_, { agentId, data }) => {
    return interactive.question(agentId, data);
  }
};

export default {
  namespaced: true,
  actions
};
