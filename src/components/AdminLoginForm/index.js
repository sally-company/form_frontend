import { connect } from "react-redux";
import Container from "./container"
import { actionCreators as userActions } from "../../redux/reducer/user";

const mapDispatchToProps = (dispatch, props) => {
    return {
        adminLogin: (username, password) => {
            dispatch(userActions.adminLogin(username, password));
        }
    };
}

export default connect(null, mapDispatchToProps)(Container);