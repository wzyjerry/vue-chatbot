import user from "@/api/user";

const actions = {
  regist: (_, data) => {
    user.regist(data);
  },
  login: async (_, data) => {
    try {
      const response = await user.login(data);
      return response.data;
    } catch (error) {
      console.debug(error);
    }
  }
};

export default {
  namespaced: true,
  actions
};
