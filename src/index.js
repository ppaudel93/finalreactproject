import React from "react";
import ReactDOM from "react-dom";
import Routes from "./client/Routes/routes";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";
import "index.scss";
import "normalize.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./static/themes/theme";

document.title = "React Project";
ReactDOM.hydrate(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.querySelector("#root")
);
