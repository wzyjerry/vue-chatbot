import ajax from "./config.js";

async function getLanguages() {
  const languages = await ajax.get("/agent/getLanguages").then(response => {
    return response.data["languages"];
  });
  return languages;
}

async function getTimeZones() {
  const timeZones = await ajax.get("/agent/getTimeZones").then(response => {
    return response.data["timeZones"];
  });
  return timeZones;
}

async function createAgent(data) {
  await ajax.post("/agent/create", data);
}

async function getAgentList(id) {
  const agentList = await ajax.get(`/agent/index?id=${id}`).then(response => {
    return response.data;
  });
  return agentList;
}

export default {
  getLanguages,
  getTimeZones,
  createAgent,
  getAgentList
};
