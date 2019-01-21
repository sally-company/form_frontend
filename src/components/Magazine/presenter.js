import React, {Component} from 'react'
import styles from './styles.module.scss'

class Magazine extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.columnText}>
                        금주의 매거진
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.box}>
                        <div className={styles.boxItem}>
                            <img src={require('images/magazine1.png')} alt="" className={styles.mImg}/>
                            <div className={styles.boxTitle}>예술가와 술</div>
                            <div className={styles.boxSubtitle}>헤밍웨이의 모히또, 고흐의 압생트  ...</div>
                            <div className={styles.boxAuthor}>By 최부영</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/magazine2.png')} alt="" className={styles.mImg}/>
                            <div className={styles.boxTitle}>연예인의 책</div>
                            <div className={styles.boxSubtitle}>걷는 사람 - 하정우, 계절을 너에게 배웠어 - ...</div>
                            <div className={styles.boxAuthor}>By 최부영</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/magazine3.png')} alt="" className={styles.mImg}/>
                            <div className={styles.boxTitle}>서울 책방 투어</div>
                            <div className={styles.boxSubtitle}>서울의 책방 투어</div>
                            <div className={styles.boxAuthor}>By 최부영</div>
                        </div>

                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.columnText}>
                        전체 매거진
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.box}>
                        <div className={styles.boxItem}>
                            <img src={require('images/magazine1.png')} alt="" className={styles.mImg}/>
                            <div className={styles.boxTitle}>예술가와 술</div>
                            <div className={styles.boxSubtitle}>헤밍웨이의 모히또, 고흐의 압생트  ...</div>
                            <div className={styles.boxAuthor}>By 최부영</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/magazine2.png')} alt="" className={styles.mImg}/>
                            <div className={styles.boxTitle}>연예인의 책</div>
                            <div className={styles.boxSubtitle}>걷는 사람 - 하정우, 계절을 너에게 배웠어 - ...</div>
                            <div className={styles.boxAuthor}>By 최부영</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/magazine3.png')} alt="" className={styles.mImg}/>
                            <div className={styles.boxTitle}>서울 책방 투어</div>
                            <div className={styles.boxSubtitle}>서울의 책방 투어</div>
                            <div className={styles.boxAuthor}>By 최부영</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    
}


export default Magazine
