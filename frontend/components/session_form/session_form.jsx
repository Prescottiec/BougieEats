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
    // this.demoLogin = this.demoLogin.bind(this);
    // this.clearErrors = this.clearErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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

//   clearErrors(e) {
//     this.props.clearErrors()
//   }

  render() {
    let errors;
    if (this.props.errors[0].length) {
      errors = this.props.errors[0].map((error, index)=> 
        (<li key={index}>{error}</li>)
      )
      let error = document.getElementById('errors');
      error.classList.add('errors')
    };

    if (this.props.formType === 'Log In') {
      return (
            <div>
                <Link to="/login">Login</Link>
            </div>
        )} else if (this.props.formType === 'Sign Up') {
      return (
            <div>
                <Link to="/signup">Sign up!</Link>
            </div>
      )}
    // return (
    //   <div className="login-page">
    //     <div className="user-auth-container">
    //         <SignupFormContainer />
    //         <LoginFormContainer />
    //     </div>
    //   </div>
    // );
  }

}

export default withRouter(SessionForm);
