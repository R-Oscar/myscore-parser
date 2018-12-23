const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    // watchContentBase: true,
    // publicPath: '/dist/',
    hot: true,
    disableHostCheck: true
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' }), new HotModuleReplacementPlugin()],
  module: {
    rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
