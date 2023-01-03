import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SessionFormContainer from "./session_form/session_form_container";

const App = () => (
  <div>
    {/* <header>
        <h1>Bougie Eats</h1>
    </header> */}

    {/* <Switch>     */}
        <AuthRoute exact path="/" component={SessionFormContainer} />
    {/* </Switch> */}
  </div>
);

export default App;
