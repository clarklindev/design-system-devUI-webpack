const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    entry: path.resolve(__dirname, 'src', `index.${argv.mode}.js`),
    mode: argv.mode, //development / production / none
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/env",  '@babel/preset-react'] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: { extensions: [ ".js", ".jsx"] },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js"
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist', 'index.html'),
        template: path.resolve(__dirname, 'src', 'template.html'),
      }),
    ],
  }
  
};