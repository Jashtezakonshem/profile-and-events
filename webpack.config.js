'use strict';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    devtool: "eval-source-map",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html', to: 'index.html'},
            { from: 'data', to: 'data'},
            { from: 'custom.css', to: 'custom.css'}
        ])
    ],
    resolve: {
        modules: [path.join(__dirname, "helpers")]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'

            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    }
};