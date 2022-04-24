const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js', // punto de entrada de la aplicacion
  output: { // punto de salida de la app
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  // mode: process.env.APP_MODE,
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
    new Dotenv()
  ]
}
