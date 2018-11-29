const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
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
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
