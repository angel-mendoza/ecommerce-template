const path = require('path')
const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js', // punto de entrada de la aplicacion
  output: { // punto de salida de la app
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve: { // son las extenciones de los tipos de archivos que soportara
    extensions: ['.js', 'jsx']
  },
  module: { // son los modulos externos que se usan para poder ejecutar el codigo
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [ // //son los modulos externos que se usan para poder ejecutar el codigo
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new Dotenv()
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000
  }
}
