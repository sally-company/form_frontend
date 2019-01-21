import React from 'react'
import styles from './styles.module.scss'

const Loading = props =>{
    return (
        <div className={styles.container}>
            <img src={require("images/loading.png")}
                 className={styles.spinner}
                 alt="looading"/>
        </div>
    )
}

export default Loading