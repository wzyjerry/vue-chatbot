import ajax from "./config.js";

function regist(data) {
  return ajax.post("/user", data);
}

function login(data) {
  return ajax.post("/user/login", data);
}

export default {
  regist,
  login
};
