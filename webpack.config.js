const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
  './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
      'babel-loader',
      ],
    },    
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        loader: "css-loader!sass-loader",
      }) 
    }
    ],  
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'www/main.css',
      allChunks: true
    })
  ],
  resolve: {
    modules: [
    path.join(__dirname, 'node_modules'),
    ],
  },
};