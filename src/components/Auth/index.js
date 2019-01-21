import { connect } from 'react-redux'
import Container from './container'
import {actionCreators as userActions } from "../../redux/reducer/user";

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        facebookLogin : (response) =>{
            dispatch(userActions.facebookLogin(response))
        },
        facebookSignup : (response) =>{
            dispatch(userActions.facebookSignup(response))
        }
    }
}
//Add all the actions for :
//Log in
//Sign up
//Recover password
//Check username
//Check password
//Check email

export default connect(null, mapDispatchToProps)(Container)