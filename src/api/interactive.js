import ajax from "./config";

function question(agentId, data) {
  return ajax.post("/conversation", {
    agent_id: agentId,
    sentence: data
  });
}

export default {
  question
};
