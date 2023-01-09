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
            <div>Signup</div>
        )
    }

}

export default SignupForm;
