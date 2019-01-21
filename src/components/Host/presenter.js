import React, {Component} from 'react'
import styles from './styles.module.scss'

class Host extends Component {

    render() {
        return (
            <div className={styles.container}>
                <img src={require('images/hostbg.png')} alt="" className={styles.bg}/>
                <div className={styles.column}>
                    <div className={styles.title}>
                        취미에 취향을 더한 모임, 폼에 에디터로 참여하세요
                    </div>
                    <div>
                        <p className={styles.context}>‘ 얼마를 버는지 ’</p>
                        <p className={styles.context}>‘ 어디를 갔고, 무엇을 먹었는지 ’</p>
                        <p className={styles.context}>‘ 누가 누구를 만나 어떻게 헤어졌는지 ’</p>
                        <br/>
                        <p className={styles.context}>이런 대화가 아닌</p>
                        <br/>
                        <p className={styles.context}>‘ 사랑은 무엇이고 ’</p>
                        <p className={styles.context}>‘ 겨울은 어떤 계절이고 ’</p>
                        <p className={styles.context}>‘ 헤밍웨이는 어떤 작가인지 ’</p>
                        <br/>
                        <p className={styles.context}>최근에 이런 대화를 나눈 적이 있으신가요?</p>
                        <br/>
                        <p className={styles.context}>[몽ː상]은</p>
                        <p className={styles.context}>조금 쉽거나, 어렵거나</p>
                        <p className={styles.context}>조금 가볍거나, 무겁거나</p>
                        <p className={styles.context}>조금 시시하거나, 중요하거나</p>
                        <p className={styles.context}>조금 유치하거나, 성숙하거나</p>
                        <p className={styles.context}>조금 어색하거나, 자연스러운</p>
                        <p className={styles.context}>주제에 대하여</p>
                    </div>
                    <button className={styles.button}>신청하기</button>

                </div>
            </div>
        );
    }
    
}


export default Host
