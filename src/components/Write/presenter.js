import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./styles.module.scss";
import { EditorState } from "draft-js";
import PropTypes from "prop-types";
import axios from "axios";

function uploadCallback(image) {
    const formData = new FormData();
    formData.append("image", image);
    console.log(image);

    return axios
        .post("/upload", formData)
        .then(res => {
            const { data } = res.data;
            console.log(data);
            return { data };
        })
        .catch(err => console.log(err));
}

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    onEditorStateChange = editorState => {
        this.setState({
            editorState
        });
    };

    render() {
        return (
            <div className={styles.root}>
                <Editor
                    editorState={this.state.editorState}
                    wrapperClassName={styles.wrapper}
                    editorClassName={styles.editor}
                    toolbar={{
                        image: {
                            uploadEnabled: true,
                            urlEnabled: true,
                            uploadCallback: this.props.uploadImage,
                            alt: { present: true, mandatory: false },
                            defaultSize: {
                                height: "auto",
                                width: "100%"
                            }
                        }
                    }}
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}

Write.propTypes = {
    uploadImage: PropTypes.func.isRequired
};

export default Write;