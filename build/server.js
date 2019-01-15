"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var webpack = require("webpack");

var config = require("../webpack.config.dev.js");

var webpackDevMiddleware = require("webpack-dev-middleware");

var webpackHotMiddleware = require("webpack-hot-middleware");

var compiler = webpack(config);

var app = (0, _express.default)(),
    DIST_DIR = "./src",
    HTML_FILE = _path.default.join(DIST_DIR, "index.html");

app.use(_express.default.static(DIST_DIR));
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get("*", function (req, res) {
  res.sendFile(HTML_FILE);
});
var PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
  console.log("Listening on ".concat(PORT));
  console.log("Press Ctrl+C to quit.");
});