const HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      Dotenv = require('dotenv-webpack'),
      path = require('path')

module.exports = { 

    devtool: 'source-map',

    entry: [ "@babel/polyfill", path.join(__dirname, 'src', 'index.js') ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/  ,
                exclude: /node_module/,
                loader: 'babel-loader'
            },
            {
                test: /\.(s?css)$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                    'resolve-url-loader?sourceMap',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [ require('tailwindcss'), require('autoprefixer')() ]
                        }
                    },
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },
                    'image-webpack-loader?bypassOnDebug'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            favicon: path.join(__dirname, 'src', 'img', 'favicon.png')
        }),
        new Dotenv()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3001,
        open: true,
        historyApiFallback: true,
        publicPath: '/'
    }
}