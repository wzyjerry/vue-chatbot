import ajax from "./config";

function create(agentId, data) {
  return ajax.post(`/agent/${agentId}/intent`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function edit(agentId, id, data) {
  return ajax.put(`/agent/${agentId}/intent/${id}`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function setting(agentId, id, data) {
  return ajax.put(`/agent/${agentId}/intent/setting/${id}`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function view(agentId, id) {
  return ajax.get(`/agent/${agentId}/intent/${id}`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function remove(agentId, id) {
  return ajax.delete(`/agent/${agentId}/intent/${id}`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function list(agentId) {
  return ajax.get(`/agent/${agentId}/intent`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

export default {
  create,
  edit,
  setting,
  view,
  remove,
  list
};
