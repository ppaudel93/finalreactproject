import Path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.config.dev";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes/routes";
import fs from "fs";

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
app.get("/*", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );
  fs.readFile(HTML_FILE, "utf8", (err, data) => {
    if (err) {
      console.log("Something went wrong: ", err);
      return res.status(500).send("Oops, better luck next time.");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
