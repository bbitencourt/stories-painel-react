import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Stories from "../pages/Stories";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/stories" exact component={Stories} />
    </Switch>
  );
}
