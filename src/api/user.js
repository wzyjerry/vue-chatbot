import ajax from "./config";

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

function edit(data) {
  return ajax.put(`/user`, data, {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

function logout() {
  return ajax.get("/user/logout", {
    params: {
      api_key: localStorage.getItem("api_key")
    }
  });
}

export default {
  regist,
  login,
  logout,
  edit
};
