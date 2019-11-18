
const {configIconFont, configSVGIcon, configBundleTracker, configUrlLoaderLimit, configSVGUrl} = require("./project.config.js");


module.exports = {
  runtimeCompiler:true,
  outputDir: './dist/',
  // assetsDir:'static/',
  publicPath:'static/',
  chainWebpack: config => {
    // folder be processed by svgo/svg-sprite and you have to require it from your JS
    configSVGIcon(config,'./src/assets/img/icons');
    configIconFont(config);
    configBundleTracker(config);
    configUrlLoaderLimit(config, 8192);
    configSVGUrl(config,8192, './src/assets/svg/icons/svg-urls');
    config.optimization.splitChunks(false);
    config.resolve.alias.set('__STATIC__', 'static/');
    config.devServer
        .headers({"Access-Control-Allow-Origin": ["*"]});
  },
};


