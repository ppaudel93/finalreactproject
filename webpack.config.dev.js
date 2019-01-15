const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

//import path from "path";
//import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: {
    main: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "./src/index.js"
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "[name].js"
  },
  mode: "development",
  target: "web",
  devtool: "source-map",
  resolve: {
    modules: [path.resolve("./", "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif|img|mp3)$/,
        loaders: ["file-loader"]
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join("./", "src", "index.html"),
      filename: "./index.html",
      excludeChunks: ["server"]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
