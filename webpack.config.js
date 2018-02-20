const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/scripts/popup.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js?[hash]'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader'
                    },
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /.(ttf|otf|eot|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            'src/images',
            'src/manifest.json'
        ]),
        new HtmlWebpackPlugin({
            filename: 'popup.html?[hash]',
            template: './src/popup.html'
        }),
        new ExtractTextPlugin({
            filename: "[name].css?[hash]"
        })
    ]
};
