import {connect} from 'react-redux'
import Container from './container'
import { actionCreators as posterActions} from "../../redux/reducer/poster";

const mapStateToProps = (state, ownProps)=>{
    const {posters : {salon}} = state;
    return{
        salon
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        getSalon : () =>{
            dispatch(posterActions.getSalon())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)