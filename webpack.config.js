const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    
    entry: {
        game: './src/game.js'
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
            __ENV__: this.mode
        }),
    ],
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        publicPath: './',
        writeToDisk: true
    }
}
