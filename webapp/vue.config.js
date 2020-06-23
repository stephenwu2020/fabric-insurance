module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-nested')
        ]
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Fabric Insurance'
        return args
      })
  }
}
