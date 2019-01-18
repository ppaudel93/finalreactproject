const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = (env, argv) => {
  const SERVER_PATH =
    argv.mode === "production"
      ? "./src/server/server-prod.js"
      : "./src/server/server-dev.js";

  return {
    entry: {
      server: SERVER_PATH
    },
    output: {
      path: path.join(__dirname, "build"),
      publicPath: "/",
      filename: "[name].js"
    },
    mode: argv.mode,
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    plugins: [new NodemonPlugin()],
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
};
