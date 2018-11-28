import ajax from "./config";

async function create(data) {
  return ajax.post(`/agent/`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

async function edit(id, data) {
  return ajax.put(`/agent/${id}`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

async function view(id) {
  return ajax.get(`/agent/${id}`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function remove(id) {
  return ajax.delete(`/agent/${id}`, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function list() {
  return ajax.get(`/agent`, {
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
