import ajax from "./config.js";

async function create(agentId, data) {
  await ajax.post(`/agent/${agentId}/entity`, data);
}

async function edit(agentId, id, data) {
  await ajax.put(`/agent/${agentId}/entity/${id}`, data);
}

async function view(agentId, id) {
  return await ajax.get(`/agent/${agentId}/entity/${id}`).then(response => {
    return response.data;
  });
}

async function remove(agentId, id) {
  await ajax.delete(`/agent/${agentId}/entity/${id}`);
}

async function list(agentId) {
  return await ajax.get(`/agent/${agentId}/entity`).then(response => {
    return response.data.list;
  });
}

export default {
  create,
  edit,
  view,
  remove,
  list
};
