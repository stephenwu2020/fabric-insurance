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
  }
}
