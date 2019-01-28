import { connect } from 'react-redux'
import Container from './container'
import {actionCreators as posterActions} from "../../redux/reducer/poster"



const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        uploadImage : (image) =>{
            return posterActions.uploadImage(image);
        }
    }
}

export default connect(null, mapDispatchToProps)(Container)