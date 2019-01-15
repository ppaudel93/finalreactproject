import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

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
    <h1>THis is home</h1>
  </div>
);
const Routes = () => (
  <div>
    <Switch>
      <Route path="/" exact component={basic} />
      <Route path="/about" component={about} />
      <Route path="/home" component={home} />
    </Switch>
  </div>
);

export default Routes;
