const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require("webpack");
module.exports = {
    mode: 'development',
    //la direccion de origen 
    entry: path.join(__dirname, './src/main.js'),
    watch: true,
    output: {
        path: path.join(__dirname, 'dist'),
        // publicPath: '/dist/',
        filename: "bundle.js" //agrupa archivo
            // chunkFilename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ],
            },
            { test: /\.txt$/, use: 'raw-loader' }
        ],
    },
    devServer: {
        port: 5000
    },
    plugins: [
        new HtmlWebPackPlugin({
            //vamos a copiar este index para mandarlo al dist
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // template: './src/main.scss',
            filename: 'bundle.css'
        })
    ],

};