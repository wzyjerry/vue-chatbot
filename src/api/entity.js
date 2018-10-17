import ajax from "./config.js";

async function create(agentId, data) {
  await ajax.post(`/agent/view/${agentId}/entity/create`, data);
}

async function edit(agentId, id, data) {
  await ajax.put(`/agent/view/${agentId}/entity/edit/${id}`, data);
}

async function view(agentId, id) {
  return await ajax
    .get(`/agent/view/${agentId}/entity/view/${id}`)
    .then(response => {
      return response.data;
    });
}

async function remove(agentId, id) {
  await ajax.delete(`/agent/view/${agentId}/entity/remove/${id}`);
}

async function page(agentId, id) {
  return await ajax
    .get(`/agent/view/${agentId}/entity/page?id=${id}`)
    .then(response => {
      return response.data;
    });
}

async function list(agentId) {
  return await ajax.get(`/agent/view/${agentId}/entity/list`).then(response => {
    return response.data.list;
  });
}

export default {
  create,
  edit,
  view,
  remove,
  page,
  list
};
