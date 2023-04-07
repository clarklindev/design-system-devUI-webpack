const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: argv.mode,
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: {
            fullySpecified: false,
          },
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
    resolve: { extensions: ['.js', '.jsx'] },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist', 'index.html'),
        template: path.resolve(__dirname, 'src', 'template.html'),
      }),
    ],
  };
};
