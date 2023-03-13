const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log('isProduction: ', isProduction);

  return {

    devServer: {
      static: path.resolve(__dirname, 'dist'),
      compress: false,

      port: 9000,
    },
    
    entry: {
      index: isProduction
        ? path.resolve(__dirname, 'src', 'index.production.js')
        : path.resolve(__dirname, 'src', 'index.development.js'),
    },
    experiments:{
      outputModule: true
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      scriptType: 'text/javascript',
      filename: 'index.js',
      library: {
        type: 'module',
      },
    },

    resolve: {
      extensions: ['.js'],
    },

    module: {
      rules: [
        {
          test: /\.(js)$/,
          resolve: {
            fullySpecified: false,
          },
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', 
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist', 'index.html'),
        template: path.resolve(__dirname, 'src', 'template.html'),
      }),
    ],
  };
};
