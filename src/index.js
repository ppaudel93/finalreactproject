import React from "react";
import ReactDOM from "react-dom";
import Routes from "./client/Routes/routes";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";
import "index.scss";
import "normalize.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./static/themes/theme";
import CreateStore from "./client/Store";
import { Provider } from "react-redux";
// import "rxjs/operators";

// import "rxjs/add/operator/map";
// import "rxjs/add/observable/of";
// import "rxjs/add/operator/catch";

const LOGGED_IN = "LOGGED_IN";
const store = CreateStore();
window.store = store;
if (localStorage.getItem(LOGGED_IN) === null)
  localStorage.setItem(LOGGED_IN, false);
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
