import ajax from "./config";

function create(agentId, data) {
  return ajax.post(`/agent/${agentId}/entity`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function edit(agentId, id, data) {
  return ajax.put(`/agent/${agentId}/entity/${id}`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function view(agentId, id) {
  return ajax.get(`/agent/${agentId}/entity/${id}`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function remove(agentId, id) {
  return ajax.delete(`/agent/${agentId}/entity/${id}`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function list(agentId) {
  return ajax.get(`/agent/${agentId}/entity`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

export default {
  create,
  edit,
  view,
  remove,
  list
};
