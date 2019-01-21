import user from "@/api/user";

const actions = {
  regist: (_, data) => {
    return user.regist(data);
  },
  login: (_, data) => {
    return user.login(data);
  },
  edit: (_, data) => {
    return user.edit(data);
  },
  logout: () => {
    return user.logout();
  }
};

export default {
  namespaced: true,
  actions
};
