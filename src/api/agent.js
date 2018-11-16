import ajax from "./config.js";

async function create(data) {
  return ajax.post(`/agent`, data);
}

async function edit(id, data) {
  return ajax.put(`/agent/${id}`, data);
}

async function view(id) {
  return ajax.get(`/agent/${id}`);
}

function remove(id) {
  return ajax.delete(`/agent/${id}`);
}

function list() {
  return ajax.get(`/agent`);
}

export default {
  create,
  edit,
  view,
  remove,
  list
};
