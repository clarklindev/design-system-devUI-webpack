const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const html = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.css$/i,
        // style loader must be before css-loader, loaders are applied backwards
        //so css-loader is applied before style-loader
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        type: 'asset/resource', //file-loader
        generator: {
          filename: 'IMG/[hash].[name][ext]',
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
  ],
})
