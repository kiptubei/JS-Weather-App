// const path = require("path");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//
// module.exports = {
// //  mode: "development",
//   devtool: 'inline-source-map',
//   resolve: {
//     extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
//   },
//   entry: "./src/main.js",
//   output: {
//     filename: "main.[contenthash].js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   devServer: {
//     //publicPath: "/dist/",
//     contentBase: './dist',
//     compress: true,
//     port: 9010,
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       template: "./src/template.html",
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/,
//         use: ["file-loader"],
//       },
//     ],
//   },
//   optimization: {
//     minimize: false,
//   },
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9010,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
