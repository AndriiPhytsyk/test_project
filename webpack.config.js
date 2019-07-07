const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //mode: 'development', // or production
    mode: 'production',
    entry: {
        starter: './app.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {test: /\.jpg$/, use: 'url-loader?mimetype=image/jpg'},
            { test: /\.tsx?$/, use: 'ts-loader' },
            {test: /\.css$/, use: 'css-loader'},

]
    },
    externals: [
        //'jquery',
        //'bootstrap',
        //'angular'
    ],
    output: {

        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve('./dist/')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        overlay: true
    }

}