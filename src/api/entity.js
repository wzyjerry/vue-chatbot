import ajax from "./config.js";

function create(agentId, data) {
  return ajax.post(`/agent/${agentId}/entity`, data);
}

function edit(agentId, id, data) {
  return ajax.put(`/agent/${agentId}/entity/${id}`, data);
}

function view(agentId, id) {
  return ajax.get(`/agent/${agentId}/entity/${id}`);
}

function remove(agentId, id) {
  return ajax.delete(`/agent/${agentId}/entity/${id}`);
}

function list(agentId) {
  return ajax.get(`/agent/${agentId}/entity`);
}

export default {
  create,
  edit,
  view,
  remove,
  list
};
