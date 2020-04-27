const path = require('path')
const webpack = require('webpack')
const LodashWebpackPlugin = require('lodash-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  assetsDir: 'static',
  publicPath: '/cs',
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
    }
  },

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return {
          ...options,
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: ['xlink:href', 'href'],
            use: ['xlink:href', 'href'],
            // 在这里添加需要使用静态资源的自定义元素
            'div': 'default-src',
          },
        }
      })
    if (process.env.NODE_ENV === 'production') {
      config.plugin('loadshReplace')
        .use(new LodashWebpackPlugin())
        .end()
    }
    config.plugin('ProvidePlugin')
      .use(new webpack.ProvidePlugin({
        _: 'lodash'
      }))
      .end()
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 4096
      }))
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/style/mixin.scss";'
      }
    }
  }
}
