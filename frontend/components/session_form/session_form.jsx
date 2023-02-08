import React from 'react';
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
          <h2>Welcome to Bougie Eats!</h2>
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          
          <div className="login-form">
            <SignupFormContainer />
            <LoginFormContainer />
          </div>
      </div>
    );
  }

}

export default SessionForm;
