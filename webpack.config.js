const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};
