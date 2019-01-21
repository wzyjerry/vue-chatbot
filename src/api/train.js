import ajax from "./config";

function train(agentId) {
  return ajax.post(`/agent/${agentId}/train`, null, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

export default {
  train
};
