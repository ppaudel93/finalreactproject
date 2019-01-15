import React from "react";
import ReactDOM from "react-dom";
import Routes from "./client/Routes/routes";
import { BrowserRouter } from "react-router-dom";

import "index.scss";

let HelloWorld = () => <h1>Hello There.</h1>;

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
