import React from "react";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleChange(fieldType){
        return event => {
            this.setState({
                [fieldType]: event.currentTarget.value
            });
        }
    }

    render(){
        return (
            <div className="session-form">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <br/>
                    <div className="signup-form">
                        <br />
                        <label className="user-auth-text">{this.props.formType}</label>

                        <input 
                            type="first_name" 
                            placeholder="Your First Name"
                            className="input-box" 
                            value={this.state.first_name} 
                            onChange={this.handleChange("first_name")}
                        />
                        <br />

                        <input 
                            type="last_name" 
                            placeholder="Your Last Name"
                            className="input-box" 
                            value={this.state.last_name} 
                            onChange={this.handleChange("last_name")}
                        />
                        <br />
        
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            className="input-box" 
                            value={this.state.email} 
                            onChange={this.handleChange("email")}
                        />
                        <br />
                        
                        <input 
                            type="password" 
                            placeholder="Your Password"
                            className="input-box" 
                            value={this.state.password} 
                            onChange={this.handleChange("password")}
                        />
                        <br />
                        <button className="session-submit">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignupForm;
