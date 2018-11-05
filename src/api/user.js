import ajax from "./config.js";

async function regist(data) {
  await ajax.post("/user", data);
}

export default {
  regist
};
