import React, { Component } from "react";

const regExp = RegExp(
    /^[A-Za-z0-9._%+-]+@lums\.edu\.pk$/

)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;
    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });
    Object.values(rest).forEach(val => {
        if (val === null || val === "") {
            isValid = false
        } else {
            isValid = true
        }
    });
    return isValid;
};

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "At least 4 characters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "LUMS email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "At least 6 characters required" : "";
                break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })
    };
    render() {
        const { isError } = this.state;
        return (
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>
                <button type="submit" className="btn btn-block btn-danger">Create User</button>
            </form>
        );
    }
}
