const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')
const { ModuleFederationPlugin } = require('webpack').container
const webpack = require('webpack')

module.exports = (env = {}) => ({
    mode: 'development',
    cache: false,
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    target: 'web',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.vue', '.jsx', '.js', '.json'],
        alias: {
            // this isn't technically needed, since the default `vue` entry for bundlers
            // is a simple `export * from '@vue/runtime-dom`. However having this
            // extra re-export somehow causes webpack to always invalidate the module
            // on the first HMR update and causes the page to reload.
            vue: '@vue/runtime-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 8192 },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Make a global `process` variable that points to the `process` package,
            // because the `util` package expects there to be a global variable named `process`.
                 // Thanks to https://stackoverflow.com/a/65018686/14239942
            process: 'process/browser'
        }),
        new webpack.EnvironmentPlugin(['BASE_URL']),
        new VuetifyPlugin({ autoImport: true }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: true
        }),
        new ModuleFederationPlugin({
            name: 'bspace_main',
            filename: 'remoteEntry.js',
            remotes: {
                bspace_probation: 'bspace_probation@http://localhost:3002/remoteEntry.js',
            },
            exposes: {},
            shared: {
                vue: {
                    singleton: true,
                },
                vuetify: {
                    singleton: true,
                },
                pinia: {
                    singleton: true,
                },
                'vuetify-pro-tiptap': {
                    singleton: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            chunks: ['main'],
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname),
        },
        historyApiFallback: true,
        compress: true,
        port: 3001,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
})
