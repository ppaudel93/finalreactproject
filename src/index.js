import React from "react";
import ReactDOM from "react-dom";
import Routes from "./client/Routes/routes";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";
import "index.scss";
import "normalize.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./static/themes/theme";
import store from "./client/Store";
import { Provider } from "react-redux";

window.store = store;
document.title = "React Project";
ReactDOM.hydrate(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
