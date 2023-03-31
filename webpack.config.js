const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const imageDir = path.resolve('./asset/image');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        exclude: /^node_modules$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jpg|png|gif$/,
        use: 'url-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      Image: imageDir
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      template: path.resolve(__dirname, "index.html"),
    }),
    new CleanWebpackPlugin({}),
  ],
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8000,
    hot:true,
  },
};