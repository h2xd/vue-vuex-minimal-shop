const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';
const minify = env === 'production';

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  devtool: sourceMap ? 'cheap-module-eval-source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!resolve-url-loader!sass-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',

      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'static', 'index.html'),
      inject: true,
      minify: minify
        ? {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
        : false
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'static', 'assets', '*'),
        to: path.join(__dirname, 'dist', 'assets'),
        flatten: true
      }
    ])
  ],
};

if (minify) {
  config.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    })
  ];
}

module.exports = config;