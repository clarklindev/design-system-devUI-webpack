const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ env, args }) => {
  return {
    entry: './src/index.js',

    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
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
      static: './dist',
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/template.html',
      }),
    ],
  }
}
