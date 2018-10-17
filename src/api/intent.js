import ajax from "./config.js";

async function create(agentId, data) {
  await ajax.post(`/agent/view/${agentId}/intent/create`, data);
}

async function edit(agentId, id, data) {
  await ajax.put(`/agent/view/${agentId}/intent/edit/${id}`, data);
}

async function setting(agentId, id, data) {
  await ajax.put(`/agent/view/${agentId}/intent/setting/${id}`, data);
}

async function view(agentId, id) {
  return await ajax
    .get(`/agent/view/${agentId}/intent/view/${id}`)
    .then(response => {
      return response.data;
    });
}

async function remove(agentId, id) {
  await ajax.delete(`/agent/view/${agentId}/intent/remove/${id}`);
}

async function page(agentId, id) {
  return await ajax
    .get(`/agent/view/${agentId}/intent/page?id=${id}`)
    .then(response => {
      return response.data;
    });
}

export default {
  create,
  edit,
  setting,
  view,
  remove,
  page
};
