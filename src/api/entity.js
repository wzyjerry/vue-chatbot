import ajax from "./config.js";

async function getEntityList(agentId, id) {
  const agentList = await ajax
    .get(`/agent/view/${agentId}/entity/index?id=${id}`)
    .then(response => {
      return response.data;
    });
  return agentList;
}

async function createEntity(agentId, data) {
  await ajax.post(`/agent/view/${agentId}/entity/create`, data);
}

export default {
  getEntityList,
  createEntity
};
