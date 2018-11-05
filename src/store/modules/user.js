import user from "@/api/user";

const actions = {
  regist: async (_, data) => {
    await user.regist(data);
  }
};

export default {
  namespaced: true,
  actions
};
