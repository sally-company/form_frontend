import React from 'react'
import styles from './styles.module.scss'

const Profile = props =>{
    return(
        <div className={styles.container}>
            <div className={styles.topColumn}>
                <div className={styles.profileImg}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.box}>
                    <div className={styles.name}></div>
                    <div className={styles.editor}></div>
                    <div className={styles.editor}></div>
                    <div>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default Profile
