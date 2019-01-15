import Path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.config.dev";

let app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = Path.join(DIST_DIR, "index.html"),
  compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
  res.set("content-type", "text/html");
  res.end();
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
