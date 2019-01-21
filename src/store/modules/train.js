import train from "@/api/train";

const actions = {
  train: (_, agentId) => {
    return train.train(agentId);
  }
};

export default {
  namespaced: true,
  actions
};
