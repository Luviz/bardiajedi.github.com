const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
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
  plugins: [
    new HtmlWebpackPlugin({
      title: "meh"
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};