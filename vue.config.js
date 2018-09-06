const path = require('path')

// todo - need to make sure that assets from the pages/dir get built
module.exports = {
   pwa: {
      name: 'Ghosting the Edge',
      themeColor: '#82B1FF',
      iconPaths: {
         favicon32: 'icons/favicon-32x32.png',
         favicon16: 'icons/favicon-16x16.png',
         appleTouchIcon: 'icons/apple-touch-icon.png',
         maskIcon: 'icons/safari-pinned-tab.svg',
         msTileImage: 'icons/mstile-150x150.png'
      }
   },
   devServer: {
      stats: "verbose",
      clientLogLevel: "info"
   },
   chainWebpack: config => {
      config.module
         .rule('pages')
         .test(/\.html$/)
         .include.add(path.join(__dirname, 'src/pages')).end()

      config.module
         .rule('pages')
         .use('vue-loader')
         .loader('vue-loader')

      config.module
         .rule('pages')
         .use('vue-page-loader')
         .loader('./src/vue-page-loader')

      config.module.
      rule('fonts')
         .use('url-loader')
         .loader('url-loader')
         .options({
            limit: 20
         })
   }
}