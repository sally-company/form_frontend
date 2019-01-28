import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Write from './presenter'
import axios from "axios";

class Container extends Component {


    static propTypes = {
        uploadImage: PropTypes.func.isRequired
    }

    render() {

        return (
            <div>
                <Write uploadImage={this._handleUploadImage}/>
            </div>
        );
    }

    _handleUploadImage = image => {
        const formData = new FormData();
        formData.append('image', image);
        console.log(image);

        return axios.post('/upload', formData)
            .then(res => {
                const {data} = res.data
                console.log(data)
                return { data }
            })
            .catch(err =>
                console.log(err)
            );
    }


}

export default Container