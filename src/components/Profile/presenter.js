import React from 'react'
import styles from './styles.module.scss'
import {Editor} from 'react-draft-wysiwyg'
import {Link} from 'react-router-dom'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const Profile = props =>{
    return(
        <div className={styles.container}>
            <div className={styles.topColumn}>
                <div className={styles.profileImg}>
                    <img src={require('images/pofile.png')} alt=""/>
                </div>
                <div className={styles.box}>
                    <div className={styles.name}>앤드류</div>
                    <div className={styles.editor}>
                        <Link to={`/write`}/>
                        글쓰기
                    </div>
                    <div className={styles.editor}>수정하기</div>
                    <div>

                    </div>
                </div>

            </div>

        </div>
    )
}



export default Profile
