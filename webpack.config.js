const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './index.jsx',
    output: {
      clean: true,
      filename: isDevelopment ? '[name].ini.js' : '[name].[contenthash].js',
      chunkFilename: isDevelopment ? '[id].chunk.js' : '[id].[contenthash].js',
      assetModuleFilename: 'assets/[name].[contenthash][ext]',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      static: {
        directory: path.join(__dirname, 'build'),
      },
      port: 8080,
      hot: isDevelopment,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.tsx', '.jsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.txt$/i,
          type: 'asset/source',
        },
        {
          test: /\.svg$/i,
          type: 'asset/inline',
          parser: {
            dataUrlCondition: {
              maxSize: 10, // bytes
            },
          },
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.scss$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'IMG/[hash].[name][ext]',
          },
        },
      ],
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './template.html',
        title: 'swagfinger-ui',
        minify: !isDevelopment,
        favicon: './assets/favicon.ico',
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDevelopment
          ? '[id].chunk_css.css'
          : '[id].[contenthash].css',
      }),
    ],
  };

  return config;
};
