const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'marketing': 'marketing@http://localhost:8084/remoteEntry.js',
                'auth': 'auth@http://localhost:8081/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, devConfig)