module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/vue-charbot/dist/" : "/",
  lintOnSave: true,
  configureWebpack: {
    mode: process.env.NODE_ENV
  }
};
