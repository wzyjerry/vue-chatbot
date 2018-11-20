import ajax from "./config.js";

function regist(data) {
  return ajax.post("/user", data);
}

function login(data) {
  return ajax
    .post("/user/login", data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export default {
  regist,
  login
};
