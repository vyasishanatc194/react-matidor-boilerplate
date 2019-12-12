import React, { Component } from 'react';
import './Auth.css';
import { Button, Form } from "semantic-ui-react";
import { isValidEmailAddress, isValidPassword } from "../../utils/validators";
class LoginComponent extends Component {
    // Constructor for initialize the Data
    constructor(props) {
        super(props);

        this.initialFormData = {
            email: "",
            password: "",
        };
      
        this.initalErrors = {
            email: false,
            password: false,
        };

        this.state = {
            email: "",
            password: "",
            error: "",
            formData: {...this.initialFormData},
            errors: {...this.initalErrors}
        }        
    }

    componentDidMount() {
        this.props.setAuthredirectPath("/");
        this.authenticationCheck();
    }

    // Validate Authentication
    authenticationCheck = () => {
        const { history } = this.props;
        const token = localStorage.getItem('token');
    
        if (!token) {
          history.replace('/login');
        } else {
            history.replace('/');
        }
    }

    componentDidUpdate () {
        if (this.props.isAuthenticated && this.props.auth.authRedirectPath !== '/') {
            this.props.history.replace('/dashboard');
        }
    }

    // Call Login Reducer function for API Call
    handleLogin = () => {
        this.props.Login(this.state.formData.email, this.state.formData.password)
    }

    // Validate Input Email/Password is Valid Or Not.
    validateInput = (name, value) => {
        const trimmedValue = value.trim();
        if ((name === "email") && value.length !== 0) {
            return isValidEmailAddress(trimmedValue);
        } else if (name === "password" && value.length !== 0) {
            return isValidPassword(trimmedValue);
        }
      return true;
    }

    // Handle Email.Password field Change
    handleInputChange = (e, {name, value}) => {
        this.props.setErrors("");

        const isError = !this.validateInput(name, value);
    
        this.setState((prevState) => {
          let formData = {...prevState.formData};
          formData[name] = value;
    
          const errors = {...prevState.errors};
          errors[name] = isError;
    
          return {formData: formData, errors: errors};
        });
    }

    // Check If Form is Valid OR Not.
    isFormValid = () => {
        for (let key in this.state.formData) {
            if (this.state.errors.hasOwnProperty(key) && this.state.errors[key]) {
                return false;
            }
            if (this.state.formData.hasOwnProperty(key) && (this.state.formData[key] === "")) {
                return false;
            }
        }
        return true;
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row card-center">
                    <div className="col-md-6 login-form-1">
                        <h2>Login</h2>
                        <Form onSubmit={this.handleLogin}>
                            <Form.Input label="Email *"
                                        placeholder="Email"
                                        onChange={this.handleInputChange}
                                        name="email"
                                        value={this.state.formData.email}
                                        error={this.state.errors.email}
                                        type="email"/>
                            {
                                this.state.errors.email ?
                                    <span className="text-red float-left m-t-10 m-b10">Please Enter Valid Email</span>
                                : ''
                            }
                            <Form.Input label="Password *"
                                        placeholder="Password"
                                        onChange={this.handleInputChange}
                                        name="password"
                                        value={this.state.formData.password}
                                        error={this.state.errors.password}
                                        type="password"/>
                            {
                                this.state.errors.password ?
                                    <span className="text-left text-red float-left m-t-10 m-b10">
                                        Password is required to be between 6 and 12 characters long and contain at least one digit and one non-digit character.
                                    </span>
                                : ''
                            }
                            <div className="clearfix">
                                <span className="text-red float-left">{this.props.auth.errors}</span>   
                            </div>
                            <div className="clearfix">
                                <Button type="submit" primary className="btnSubmit m-t20"
                                    disabled={!this.isFormValid()}>
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
