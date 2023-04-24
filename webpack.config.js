const path = require('path')
const html = require('html-webpack-plugin')
// const css = require('mini-css-extract-plugin')
// const cssMinimizer = require('css-minimizer-webpack-plugin')

module.exports = {
  // if you use context - all relative paths are relative to it.
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: {
      import: './index.js', //relative to context
      // dependOn: 'shared',
    },
    // shared: './shared.js',
  },
  optimization: {
    chunkIds: 'deterministic',
    splitChunks: {
      minSize: 2000,
      chunks: 'async', //async, all, initial
    },
    // minimizer: ['...', new cssMinimizer()],
  },

  output: {
    asyncChunks: true,
    filename: '[name].ini.js',
    chunkFilename: '[name].chunk.js',
    assetModuleFilename: 'assets/[name].[hash][ext]',
    iife: false,
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    //publicPath
  },

  watchOptions: {
    ignored: ['**/node_modules'], //use glob pattern to ignore all node_modules folders
  },

  devServer: {
    port: 8080,
    hot: true,
    static: './dist',
    historyApiFallback: true,
  },

  // -----------------------------------------------------------------------------------------------------------------

  resolve: { extensions: ['.tsx', '.jsx', '.ts', '.js'] },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        type: 'asset/source', //raw-loader
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline', //url-loader
        parser: {
          dataUrlCondition: {
            maxSize: 10, //bytes
          },
        },
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
      // {
      //   test: /\.scss$/i,
      //   use: [css.loader, 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.css$/i,
        // style loader must be before css-loader, loaders are applied backwards
        //so css-loader is applied before style-loader
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        // use: [css.loader, 'css-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        // See .babelrc for further babel config
      },
    ],
  },
  plugins: [
    // new css({
    //   filename: '[name].css', //named after bundle that applies the mini-css-extract-plugin
    //   chunkFilename: '[name].chunk_css.css',
    // }),
    new html({
      filename: 'index.html',
      minify: false, //true under prod
      inject: 'body', //defaults to head
      title: 'swagfinger-ui',
      template: './template.html',
      favicon: './assets/favicon.ico',
      //publicPath
    }),
  ],
}
