import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

// import SessionFormContainer from "./session_form/session_form_container";
// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div>
    {/* <header>
        <h1>Bougie Eats</h1>
        <GreetingContainer />
    </header> */}

    <Switch>    
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>
);

export default App;
