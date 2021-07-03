const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', path.resolve(__dirname, './src'))
  },
  // resolve: {

  //   modules: [
  //     path.resolve('src'),
  //     path.resolve('node_modules')
  //   ],
  //   alias: {
  //     "@": path.join(__dirname, './src'),
  //   },
  //   // 省略后缀
  //   extensions: ['.js', '.jsx', '.less', 'css', 'png']
  // },
  css: {
    loaderOptions: {
      css: {},
      postcss: {}
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}