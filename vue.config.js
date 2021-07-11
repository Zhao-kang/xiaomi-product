const path = require('path')
function resolve (dir) {
  //path.join(__dirname)设置绝对路径
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {}
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.xiaomiyoupin.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}