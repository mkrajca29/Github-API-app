module.exports = {
  css: {
    requireModuleExtension: false
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/'Github-API-project'/" : "/",
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  }
};
