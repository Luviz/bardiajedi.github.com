const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      },
      {
        test:/.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bardia Jedi"
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true })
  ],
  output: {
    filename: '[name].main-[contenthash].js',
    path: path.resolve(__dirname, 'out'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};