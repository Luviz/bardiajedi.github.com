const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use:"file-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      title: "Bardia Jedi",
      favicon:"./src/assets/favicon.png"
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
  ],
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'out'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};