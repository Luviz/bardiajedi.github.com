const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
    {test:/.jsx$/, use:'babel-loader'}
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};