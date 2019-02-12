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
import { Provider } from "react-redux";
import CreateStore from "../client/Store";
import signupApi from "./signup";
import loginApi from "./login";
import Mongo from "mongodb";
import { MONGO_URL, DB_NAME } from "../static/JS/actionConstants";
import { findAll, connectToDB } from "./generalFunctions";

const MongoClient = Mongo.MongoClient;
const store = CreateStore();
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
app.use(express.json());
app.use(express.urlencoded());
app.get("/loginnewuser/:id", (req, res) => {
  res.send("New User Creation API" + req.params.id);
});
app.post("/login", (req, res) => {
  loginApi(req, res);
});
app.post("/signup", (req, res) => {
  signupApi(req, res);
});
app.get("/users", (req, res) => {
  connectToDB()
    .then(db => {
      findAll(db).then(docs => {
        console.log(docs);
        res.send(docs);
      });
    })
    .catch(err => {
      console.log("error:" + err);
    });
});
app.get("/*", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
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
const HOST = process.env.HOST || "localhost";
app.listen(PORT, HOST, () => {
  console.log(`Listening on ${PORT}`);
  console.log("Press Ctrl+C to quit.");
  console.log(`Server created at http://${HOST}:${PORT}`);
});
