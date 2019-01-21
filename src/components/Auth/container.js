import React, {Component} from 'react'
import Auth from './presenter'
import PropTypes from 'prop-types'

class Container extends Component {

    state = {
        action: "login"
    }

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        facebookSignup : PropTypes.func.isRequired
    }


    render() {
        const {action} = this.state
        return (
            <Auth action={action}
                  changeAction={this._changeAction}
                  handleFacebookLogin={this._handleFacebookLogin}
                  handleFacebookSignup = {this._handleFacebookSignup}
            />
        );
    }

    _changeAction = () => {
        this.setState(prevState => {
            const {action} = prevState
            if (action === "login") {
                return {
                    action: 'signup'
                }
            } else if (action === 'signup') {
                return {
                    action: 'login'
                }
            }
        })
    };

    _handleFacebookLogin = response => {
        const {facebookLogin} = this.props
        facebookLogin(response)
    };

    _handleFacebookSignup = response => {
        const {facebookSignup} = this.props
        facebookSignup(response)
    }


}

export default Container