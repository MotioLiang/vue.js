const path = require('path')
const webpack = require('webpack')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)

const cdn = {
    js: [
        '//cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/vue-router/3.1.3/vue-router.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js'
    ]
}

const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios': 'axios'
}

module.exports = {
    assetsDir: 'static',
    publicPath: '/cs',
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            // config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_debugger: true,
                            drop_console: true,
                        }
                    },
                    sourceMap: false,
                    parallel: true,
                })
            )
        }
    },

    chainWebpack: config => {
        // 定义文件路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('api', resolve('src/api'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))

        // 在这里添加需要使用静态资源的自定义元素
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
                        div: 'default-src',
                    },
                }
            })

        if (process.env.NODE_ENV === 'production') {
            config.plugin('loadshReplace')
                .use(new LodashWebpackPlugin())
                .end()

            //  添加cdn
            config.externals(externals)
            config.plugin('html')
                .tap(args => {
                    args[0].cdn = cdn
                    return args
                })
        }

        config.plugin('ProvidePlugin')
            .use(new webpack.ProvidePlugin({
                _: 'lodash'
            }))
            .end()

        //  压缩图片位base64
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
