import React, {Component} from 'react'
import styles from './styles.module.scss'

class Salon extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.columnText}>
                        추천 살롱
                    </div>
                    <div className={styles.divider}>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon1.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>[몽ː상]</div>
                            <div className={styles.boxSubtitle}>영화, 책, 음악 그리고 사랑</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon2.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>‘시’원하다.</div>
                            <div className={styles.boxSubtitle}>매주 토요일 ‘시’원하다.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon3.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>하루키</div>
                            <div className={styles.boxSubtitle}>무라카미 하루키를 조심하세요.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon4.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>일기</div>
                            <div className={styles.boxSubtitle}>하루를 마감하는 글짓기</div>
                        </div>

                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.columnText}>
                        모집 중인 살롱
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.box}>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon1.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>[몽ː상]</div>
                            <div className={styles.boxSubtitle}>영화, 책, 음악 그리고 사랑</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon2.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>‘시’원하다.</div>
                            <div className={styles.boxSubtitle}>매주 토요일 ‘시’원하다.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon3.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>하루키</div>
                            <div className={styles.boxSubtitle}>무라카미 하루키를 조심하세요.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon4.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>일기</div>
                            <div className={styles.boxSubtitle}>하루를 마감하는 글짓기</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon1.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>[몽ː상]</div>
                            <div className={styles.boxSubtitle}>영화, 책, 음악 그리고 사랑</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon2.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>‘시’원하다.</div>
                            <div className={styles.boxSubtitle}>매주 토요일 ‘시’원하다.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon3.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>하루키</div>
                            <div className={styles.boxSubtitle}>무라카미 하루키를 조심하세요.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon4.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>일기</div>
                            <div className={styles.boxSubtitle}>하루를 마감하는 글짓기</div>
                        </div>


                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.columnText}>
                        마감 살롱
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.box}>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon1.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>[몽ː상]</div>
                            <div className={styles.boxSubtitle}>영화, 책, 음악 그리고 사랑</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon2.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>‘시’원하다.</div>
                            <div className={styles.boxSubtitle}>매주 토요일 ‘시’원하다.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon3.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>하루키</div>
                            <div className={styles.boxSubtitle}>무라카미 하루키를 조심하세요.</div>
                        </div>
                        <div className={styles.boxItem}>
                            <img src={require('images/salon4.png')} alt="" className={styles.boxImg}/>
                            <div className={styles.boxTitle}>일기</div>
                            <div className={styles.boxSubtitle}>하루를 마감하는 글짓기</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    
}


export default Salon
