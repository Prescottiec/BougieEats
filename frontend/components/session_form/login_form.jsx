import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
        };
    }

    componentDidMount(){
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
            <div></div>
        );
    }

}

export default LoginForm;
