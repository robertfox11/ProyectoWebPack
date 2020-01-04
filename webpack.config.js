const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

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
    plugins: [
        new HtmlWebPackPlugin({
            //vamos a copiar este index para mandarlo al dist
            template: './src/index.html'
        })
    ],
};