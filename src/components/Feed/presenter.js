import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Loading from 'components/Loading'

const Feed = props => {
    if (props.loading) {
        return <LoadingSalon/>
    } else if (props.salon) {
        return <SalonPage {...props}/>
    }

}

const LoadingSalon = props => (
    <div className={styles.salon}>
        <Loading/>
    </div>
);

const RenderSalon = props => (
    <div className={styles.salon}> {props.salon.map(post => post.subTitle)} </div>

)

const SalonPage = props => {
    return (
        <div className={styles.container}>
            <img src={require('images/bg_1.png')} alt="" className={styles.backImage}/>
            <div className={styles.column}>
                <div className={styles.columnText}>
                    추천 살롱
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
                    금주의 매거진
                </div>
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
    )
}

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed