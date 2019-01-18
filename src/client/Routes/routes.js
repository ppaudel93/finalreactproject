import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../static/themes/theme";
import Login from "../Components/Login/login";
import SignUp from "../Components/SignUp/signup";

const basic = () => (
  <div>
    <h1>This is path none</h1>
  </div>
);
const about = () => (
  <div>
    <h1>This is path about</h1>
  </div>
);
const home = () => (
  <div>
    <Button color="secondary" variant="contained">
      Hello World
    </Button>
  </div>
);
const noPage = () => (
  <div>
    <h1>This page doesn't exist.</h1>
  </div>
);
const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Switch>
        <Route path="/" exact component={basic} />
        <Route path="/about" component={about} />
        <Route path="/home" component={home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={noPage} />
      </Switch>
    </div>
  </MuiThemeProvider>
);

export default Routes;
