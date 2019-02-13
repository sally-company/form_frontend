import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminLoginForm from "./presenter"

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        adminLogin: PropTypes.func.isRequired
    };

    render() {
        const { username, password } = this.state;
        return (
            <AdminLoginForm
                usernameValue={username}
                passwordValue={password}
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
            />
        )
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({[name]: value});
    }

    _handleSubmit = event => {
        const { adminLogin } = this.props;
        const { username, password } = this.state;
        console.log(username, password);
        event.preventDefault()
        //adminLogin(username, password);
    }
}

export default Container;
