import React, {Fragment} from 'react'
import {Editor} from 'react-draft-wysiwyg';
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import axios from "axios";

function uploadCallback(image) {

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


const Write = (props) => {
    return (
        <Fragment>
            <header>
                <div>hello</div>
            </header>
            <main>
                <Editor
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    toolbar={{
                        image: {
                            uploadEnabled: true,
                            urlEnabled: true,
                            uploadCallback :props.uploadImage,
                            alt: {present: true, mandatory: false},
                            defaultSize: {
                                height: 'auto',
                                width: '100%',
                            }
                        }
                    }}
                />
            </main>
        </Fragment>
    )
}

Write.propTypes = {
    uploadImage: PropTypes.func.isRequired
}

export default Write