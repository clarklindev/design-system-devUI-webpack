const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ env, args }) => {
  return {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'dist'),
    },
    resolve: { extensions: ['.tsx', '.jsx', '.ts', '.js'] },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(jpg|png|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
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

    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist', 'index.html'),
        template: path.resolve(__dirname, 'src', 'template.html'),
      }),
    ],
  };
};
