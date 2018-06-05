const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  // entry: {
  //   index: "./src/index.js"
  // },
  mode: "development",
  // output: {
  //   filename: "[name].bundle.js",
  //   path: path.resolve(__dirname, "../dist")
  // },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: process.env.NODE_ENV !== 'production'
    })
  ]
};