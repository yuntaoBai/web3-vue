const { defineConfig } = require('@vue/cli-service')
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:  {
    plugins: [new NodePolyfillWebpackPlugin()]
  }
})
