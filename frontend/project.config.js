// Personal configurations

let path = require('path')
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

function configSVGIcon(config,iconsFolder) {
  // Exclude SVG sprite directory from default svg rule 
  config.module
    .rule('svg')
    .exclude.add(path.resolve(__dirname, iconsFolder))
    .end();
    
  // Options used by svgo-loader to optimize SVG files
  // https://github.com/svg/svgo#what-it-can-do
  const options = {
      "plugins": [
        { "cleanupAttrs": true },
        { "cleanupEnableBackground": true },
        { "cleanupIDs": true },
        { "cleanupListOfValues": true },
        { "cleanupNumericValues": true },
        { "collapseGroups": true },
        { "convertColors": true },
        { "convertPathData": true },
        { "convertShapeToPath": true },
        { "convertStyleToAttrs": true },
        { "convertTransform": true },
        { "mergePaths": true },
        { "removeComments": true },
        { "removeDesc": true },
        { "removeDimensions": true },
        { "removeDoctype": true },
        { "removeEditorsNSData": true },
        { "removeEmptyAttrs": true },
        { "removeEmptyContainers": true },
        { "removeEmptyText": true },
        { "removeHiddenElems": true },
        { "removeMetadata": true },
        { "removeNonInheritableGroupAttrs": true },
        { "removeRasterImages": true },
        { "removeTitle": true },
        { "removeUnknownsAndDefaults": true },
        { "removeUselessDefs": true },
        { "removeUnusedNS": true },
        { "removeUselessStrokeAndFill": true },
        {
          "removeAttrs": { "attrs": "fill"}
        },
        { "removeXMLProcInst": true },
        { "removeStyleElement": true },
        { "removeUnknownsAndDefaults": true},
        { "sortAttrs": true }
      ]
    };
  

      //  config.plugin('SpriteLoaderPlugin')
      //   .use(new SpriteLoaderPlugin({
      //     plainSprite: true,
      //     spriteAttrs: {
      //       // id: 'my-custom-sprite-id'
      //     }})
      //   )


  // Include only SVG sprite directory for new svg-icon rule
  // Use svg-sprite-loader to build SVG sprite
  // Use svgo-loader to optimize SVG files
  config.module
    .rule('svg-icon')
    .test(/\.svg$/)
    .include.add(path.resolve(__dirname, iconsFolder))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]',
      // extract: true,
      // spriteFilename: 'sprite[hash].svg'

    })
    .end()
    .use('svgo-loader')
    .loader('svgo-loader')
    .options(options)
    .end();
}

function configSVGUrl(config,limit,svgFolder) {
  // Exclude SVG sprite directory from default svg rule
  config.module
    .rule('svg')
    .exclude.add(path.resolve(__dirname,svgFolder))
    .end();

  config.module
    .rule('svg-url-loader')
    .test(/\.svg$/)
    .include.add(path.resolve(__dirname, svgFolder)).end()
    .use('svg-url-loader')
    .loader('svg-url-loader')
      .options({
          limit:limit,
      })
    .end();
}


// Add IconfontWebpackPlugin instance to plugins of postcss-loader options
const IconfontWebpackPlugin = require('iconfont-webpack-plugin')


function tapPostcssLoaderOptions(config, moduleRule, rule) {
  config.module
    .rule(moduleRule)
    .oneOf(rule)
    .use('postcss-loader')
    .loader('postcss-loader')
    .tap(options => {
      const iconFontOptions = {
        plugins: (loader) => {
          return [
            new IconfontWebpackPlugin(loader),
          ];
        },
      };
      Object.assign(options, iconFontOptions);
      return options;
    });
}

function configIconFont(config) {
    // Sass is the pre-processor of my project
    // Replace with yours
    //
    // Tips
    // Use `vue inspect --rules` view rules used in project
    // Use `vue inspect --rule scss` view special rule
    // const moduleRules = ['svg-font-icon'];
    const moduleRules = ['scss', 'css'];
    const rules = ['vue', 'vue-modules'];
    // const rules = ['normal', 'normal-modules', 'vue', 'vue-modules'];
    for (let i = 0; i < moduleRules.length; i++) {
      const moduleRule = moduleRules[i];
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        tapPostcssLoaderOptions(config, moduleRule, rule)
      }
    }
  }


function configUrlLoaderLimit(config,limit){
    // config.module.rule("images").uses.clear()
    config.module.rule("images").test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .options({ limit: limit,
            fallback:{
            loader:'file-loader',
                options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }
        })
        .end()
}


  // Bundle tracker for django
let BundleTracker = require("webpack-bundle-tracker");

  function configBundleTracker(config){
    config.plugin('BundleTracker')
        .use(BundleTracker, [
            {
                filename: './webpack-stats.json'
            }
        ]);
  }
module.exports = {configSVGIcon, configIconFont, configBundleTracker,configUrlLoaderLimit,configSVGUrl}