import React from 'react';
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="login-page">
        <div className="user-auth-container">
          <h1 className="project-logo">Bougie Eats</h1>
          <div className="main-session-forms">
            <LoginFormContainer />
            <SignupFormContainer />
          </div>

        </div>
      </div>
    );
  }

}

export default SessionForm;
