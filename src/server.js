import Path from "path";
import express from "express";
const webpack = require("webpack");
const config = require("../webpack.config.dev.js");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const compiler = webpack(config);
let app = express(),
  DIST_DIR = "./src",
  HTML_FILE = Path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
