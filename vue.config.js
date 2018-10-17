module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/vue-chatbot/dist/" : "/",
  lintOnSave: true,
  configureWebpack: {
    mode: process.env.NODE_ENV
  }
};
