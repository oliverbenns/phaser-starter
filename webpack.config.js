const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (env, argv) => ({
  output: {
    filename: '[hash].js',
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(vert|frag)$/,
        use: 'raw-loader',
      },
    ],
  },
  stats: 'minimal',
  devtool: argv.mode === 'development' ? 'inline-source-map' : 'source-map',
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: true,
      WEBGL_RENDERER: true,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    port: 8080,
    stats: 'minimal',
  },
});

module.exports = config;
