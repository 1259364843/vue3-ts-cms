const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const address = 'http://123.207.32.32:5000'
// target: 'http://codercba.com:5000/',
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  publicPath: './',
  // 跨域配置
  devServer: {
    proxy: {
      '^/api': {
        pathRewrite: {
          '^/api': ''
        },
        target: address,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
})
