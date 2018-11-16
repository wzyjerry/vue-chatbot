import user from "@/api/user";

const actions = {
  regist: (_, data) => {
    return user.regist(data);
  },
  login: (_, data) => {
    return user.login(data);
  }
};

export default {
  namespaced: true,
  actions
};
