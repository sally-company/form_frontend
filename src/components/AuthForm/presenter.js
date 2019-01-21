import React from 'react'
import styles from './styles.module.scss'

const AuthForm = (props, context) => (
    <main className={styles.main}>
        <div className={styles.column}>
            <p className={styles.topColumnText}>
                회원가입
            </p>
        </div>

        <div className={styles.whiteBox}>
            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>성함</div>
                <input className={styles.boxColumnInput} type="text"/>
            </div>
            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>성별</div>
                <label>
                    <input className={styles.boxColumnRadio} type="radio" value={`option1`}/>
                    남자
                </label>
                <label>
                    <input className={styles.boxColumnRadio} type="radio" value={`option2`}/>
                    여자
                </label>
            </div>
            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>생년월일</div>
                <input className={styles.boxColumnInput} type="text"/>
            </div>
            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>별명</div>
                <input className={styles.boxColumnInput} type="text"/>
            </div>
            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>생년월일</div>
                <input className={styles.boxColumnInput} type="text"/>
                <button className={styles.boxColumnButton}>인증번호 받기</button>
            </div>
            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>연락처</div>
                <input className={styles.boxColumnInput} type="text"/>
                <button className={styles.boxColumnButton}>인증번호 확인</button>
            </div>

            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}></div>
                <input className={styles.boxColumnInput} type="text"/>
                <button className={styles.boxColumnButton}>인증번호 확인</button>
            </div>

            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>이메일 주소</div>
                <input className={styles.boxColumnInput} type="text"/>
                <button className={styles.boxColumnButton}>이메일 중복 확인</button>
            </div>

            <div className={styles.boxColumn}>
                <div className={styles.boxColumnText}>소개</div>
                <input className={styles.boxColumnIntro} type="text"/>
            </div>

        </div>


        <div className={styles.column}>
            <button className={styles.bottomSignupButton}>
                가입하
            </button>
        </div>

    </main>
);

export default AuthForm