import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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
    this.demoLogin = this.demoLogin.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // this.props.processForm(user).then(() => this.props.history.goBack());
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

//   demoLogin(e) {
//     e.preventDefault();
//     const user = {email: 'demo@user.com', password: 'demouser'};
//     this.props.demologin(user).then(() => this.props.history.goBack());
//   }

  clearErrors(e) {
    this.props.clearErrors()
  }

}

export default withRouter(SessionForm)