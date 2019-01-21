import React from 'react'
import styles from './styles.module.scss'
import FacebookLogin from 'react-facebook-login'
import PropTypes from 'prop-types'


const Auth = (props, context) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <p className={styles.topColumnText}>호스트가 되어 같은 취미, 비슷한 취향의</p>
            <p className={styles.topColumnText}>사람들과의 살롱을 가져보세요</p>
        </div>
        <div className={styles.column}>
            <p className={styles.middleColumnText}>{props.action === 'login' ? '이미 가입하셨나요?' : '살롱 드 폼이 처음이신가요?'}
            </p>
        </div>
        <div className={styles.column}>
            <FacebookLogin
                appId="2174920106102631"
                fields="name,email,picture"
                callback={props.action === 'login' ? props.handleFacebookLogin : props.handleFacebookSignup}
                cssClass={styles.loginButton}
                textButton={props.action === 'login' ? '페이스북으로 로그인' : '페이스북으로 회원가입'}
                icon={`fa-facebook-square `}
            />

        </div>
        <div className={styles.column}>
                <span className={styles.bottomColorLinkText}>
                    {swipeLoginButton(props)}
                </span>
        </div>

    </main>
);

Auth.propTypes = {
    handleFacebookLogin: PropTypes.func.isRequired,
    handleFacebookSignup: PropTypes.func.isRequired

}

const swipeLoginButton = props => {
    switch (props.action) {
        case 'login':
            return (
                <p className={styles.bottomColumnText}>살롱 드 폼이 처음이신가요?
                    <span onClick={props.changeAction} className={styles.bottomColorLinkText}>
                                            회원가입하기
                                        </span>
                </p>
            )
        case 'signup':
            return (
                <p className={styles.bottomColumnText}>이미 가입하셨나요?
                    <span onClick={props.changeAction} className={styles.bottomColorLinkText}>
                                            로그인하기
                                        </span>
                </p>
            );
        default :
            return null;
    }
}

export default Auth