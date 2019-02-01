import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Login from "../Components/Login/login";
import SignUp from "../Components/SignUp/signup";
import Home from "../Components/Home/home";

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
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={about} />
      <Route path="/home" component={home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="*" component={noPage} />
    </Switch>
  </div>
);

export default Routes;
