var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    demo: './demo/main.jsx'
  },
  output: { path: __dirname, filename: './demo/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
};
