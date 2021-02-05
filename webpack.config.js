const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /.jsx$/, use: 'babel-loader' }
    ]
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',  
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Awesome!"
    }),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: true})
  ],
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};