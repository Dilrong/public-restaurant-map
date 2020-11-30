module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            '.js',
            '.jsx',
            '.android.js',
            '.ios.js',
            '.web.js'
          ],
          root: ['./src'],
          alias: {
            "_assets": "./src/assets",
            "_components": "./src/components",
            "_navigations": "./src/navigations",
            "_scenes": "./src/scenes",
            "_services": "./src/services",
            "_styles": "./src/styles",
            "_utils": "./src/utils"
          }
        }
      ]
    ]
  };
};