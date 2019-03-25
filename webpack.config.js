const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const rimraf = require("rimraf");
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

function getRandomInRange(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString(36);
}

rimraf.sync('./src/dist');

const hashUrl = getRandomInRange(10000, 9999999);
const urlExpo = `./src/dist/${hashUrl}`;
const hashBuild = getRandomInRange(10000, 9999999);
const buildName = `bundle.${hashBuild}.js`;

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, urlExpo),
    filename: buildName
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options:{
          presets:["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: [buildName]
    })
  ]
};