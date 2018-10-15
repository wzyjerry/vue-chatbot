import ajax from "./config.js";

async function createAgent(data) {
  await ajax.post("/agent/create", data);
}

async function editAgent(id, data) {
  await ajax.put(`/agent/edit/${id}`, data);
}

async function viewAgent(id) {
  return await ajax.get(`/agent/view/${id}`).then(response => {
    return response.data;
  });
}

async function getAgentList(id) {
  return await ajax.get(`/agent/index?id=${id}`).then(response => {
    return response.data;
  });
}

export default {
  createAgent,
  editAgent,
  viewAgent,
  getAgentList
};
