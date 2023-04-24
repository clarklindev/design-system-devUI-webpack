const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const cssMinimizer = require('css-minimizer-webpack-plugin')
const css = require('mini-css-extract-plugin')
const html = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  optimization: {
    chunkIds: 'named',
    // splitChunks: {
    //   minSize: 2000,
    //   chunks: 'async', //async, all, initial
    // },
    minimizer: ['...', new cssMinimizer()],
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // style loader must be before css-loader, loaders are applied backwards
        //so css-loader is applied before style-loader
        // use: ['style-loader', 'css-loader', 'postcss-loader'],
        use: [css.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [css.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        type: 'asset/resource', //file-loader
        parser: {
          dataUrlCondition: {
            maxSize: 1000 * 1024, //bytes
          },
        },
      },
    ],
  },
  plugins: [
    new html({
      filename: 'index.html',
      template: './template.html',
      title: 'swagfinger-ui',
      minify: false, //true under prod
      favicon: './assets/favicon.ico',
    }),
    new css({
      filename: '[name].css', //named after bundle that applies the mini-css-extract-plugin
      chunkFilename: '[name].chunk_css.css',
    }),
  ],
})
