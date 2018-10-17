import ajax from "./config.js";

async function create(data) {
  await ajax.post("/agent/create", data);
}

async function edit(id, data) {
  await ajax.put(`/agent/edit/${id}`, data);
}

async function view(id) {
  return await ajax.get(`/agent/view/${id}`).then(response => {
    return response.data;
  });
}

async function remove(id) {
  await ajax.delete(`/agent/remove/${id}`);
}

async function page(id) {
  return await ajax.get(`/agent/page?id=${id}`).then(response => {
    return response.data;
  });
}

export default {
  create,
  edit,
  view,
  remove,
  page
};
