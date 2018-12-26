const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server.js',
  devServer: {
    hot: true,
    disableHostCheck: true
  },
  plugins: [new HotModuleReplacementPlugin()],
  module: {
    rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname)
  },
  externals: [webpackNodeExternals()]
};
