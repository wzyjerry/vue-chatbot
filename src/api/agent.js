import ajax from "./config.js";

async function create(data) {
  ajax.post({
    url: "/agent",
    data: data,
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

async function edit(id, data) {
  ajax.put(`/agent/${id}`, data);
}

async function view(id) {
  return ajax.get(`/agent/${id}`);
}

async function remove(id) {
  ajax.delete(`/agent/${id}`);
}

async function list() {
  return ajax.get(`/agent`);
}

export default {
  create,
  edit,
  view,
  remove,
  list
};
