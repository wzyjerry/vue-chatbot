module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/" : "/",
  lintOnSave: true,
  configureWebpack: {
    mode: process.env.NODE_ENV
  }
};
