const path = require('path');

module.exports = {
  // if you use context - all relative paths are relative to it.
  context: path.resolve(__dirname, 'src'),
  devtool: 'source-map',
  entry: './index.jsx', //relative to context
  output: {
    clean: true,
    filename: '[name].ini.js',
    chunkFilename: '[id].chunk.js',
    assetModuleFilename: 'assets/[name].[hash][ext]',
    // asyncChunks: true,
    // iife: false,
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        // See .babelrc for further babel config
      },
    ],
  },
};
