const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js', //punto de entrada de la aplicacion
  output: { // punto de salida de la app
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: { // son las extenciones de los tipos de archivos que soportara
    extensions: ['.js', 'jsx'],
  },
  module: { //son los modulos externos que se usan para poder ejecutar el codigo
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
      template: 'index.html'
    }),
  ]
}