import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // this.props.processForm(user).then(() => this.props.history.goBack());
  }

  // handleDemo(e) {
  //   e.preventDefault();
  //   const demoUser = { email: 'demo_user@mail.com', password: 'password123'};
  //   this.props.processForm(demoUser).then(() => {
  //     this.props.history.push("/")
  //   });
  // }

  renderErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="signUpLogin">
          <div className="login">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br />
              {this.renderErrors()}
              <div className="login-form">
                <br />
                <label className="user-auth-text">{this.props.formType}</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="input-box"
                />
                <br />
                {/* <label>Password</label> */}
                <input
                  type="password"
                  placeholder="Your Password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="input-box"
                />
                <br />
                <input
                  className="session-submit"
                  type="submit"
                  value={this.props.formType}
                />
                {/* <button className="demo-user-button" onClick={this.handleDemo}>Demo User</button> */}
              </div>
              <div className="login-form-errors">{this.renderErrors()}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
