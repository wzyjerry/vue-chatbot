import ajax from "./config.js";

async function create(agentId, data) {
  await ajax.post(`/agent/${agentId}/intent`, data);
}

async function edit(agentId, id, data) {
  await ajax.put(`/agent/${agentId}/intent/${id}`, data);
}

async function setting(agentId, id, data) {
  await ajax.put(`/agent/${agentId}/intent/setting/${id}`, data);
}

async function view(agentId, id) {
  return await ajax.get(`/agent/${agentId}/intent/${id}`).then(response => {
    return response.data;
  });
}

async function remove(agentId, id) {
  await ajax.delete(`/agent/${agentId}/intent/${id}`);
}

function list(agentId) {
  return ajax.get(`/agent/${agentId}/intent`);
}

export default {
  create,
  edit,
  setting,
  view,
  remove,
  list
};
