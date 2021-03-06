const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: {
        index: './src/js/index.js',
        teams: './src/js/teams.js',
        miequipo: './src/js/miequipo.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            filename: 'escudos.html',
            template: './src/escudos.html',
            chunks: ["teams"],
        }),
        new HtmlWebpackPlugin({
            filename: 'miequipo.html',
            template: './src/miequipo.html',
            chunks: ["miequipo"],
        })
    ],
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            }
        ],
    },
}