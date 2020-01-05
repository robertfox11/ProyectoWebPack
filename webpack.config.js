const HtmlWebPackPlugin = require('html-webpack-plugin');
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
            test: /\.scss$/i,
            use: [
                { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'scss-loader' }
            ]
        }, ],
    },
    devServer: {
        port: 5000
    },


    plugins: [
        new HtmlWebPackPlugin({
            //vamos a copiar este index para mandarlo al dist
            template: './src/index.html'
        })
    ],

};