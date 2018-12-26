const path = require('path');

module.exports = {
  entry: {
    app: './src/client.js'
  },
  mode: 'development',
  module: {
    rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist')
  }
};
