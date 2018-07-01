const path = require('path')

const parentDir = path.join(__dirname, '../')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    path.join(process.cwd(), 'app/app.js'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(process.cwd(), '/build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
