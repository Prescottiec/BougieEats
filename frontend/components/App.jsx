import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import HomepageContainer from "./homepage/homepage_container";
import SessionFormContainer from "./session_form/session_form_container";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Bougie Eats</h1>
      </Link>
      <HomepageContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
    </Switch>

    {/* <Switch>     */}
        {/* <AuthRoute exact path="/" component={SessionFormContainer} /> */}
    {/* </Switch> */}
  </div>
);

export default App;
