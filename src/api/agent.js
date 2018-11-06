import ajax from "./config.js";

async function create(data) {
  await ajax.post("/agent", data);
}

async function edit(id, data) {
  await ajax.put(`/agent/${id}`, data);
}

async function view(id) {
  return await ajax.get(`/agent/${id}`).then(response => {
    return response.data;
  });
}

async function remove(id) {
  await ajax.delete(`/agent/${id}`);
}

async function list() {
  return await ajax.get(`/agent`).then(response => {
    return response.data;
  });
}

export default {
  create,
  edit,
  view,
  remove,
  list
};
