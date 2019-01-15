import React from 'react'
import styles from './styles.module.scss'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';


const responseGoogle = response => {
    console.log(response)
}
const responseFacebook = (response) => {
    console.log(response);
}

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
                appId=""
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass={styles.loginButton}
                textButton={props.action === 'login' ? '페이스북으로 로그인' : '페이스북으로 회원가입'}
                icon = {`fa-facebook`}
            />
            <GoogleLogin
                clientId=""
                className={styles.loginButton}
                buttonText={props.action === 'login' ? '구글로 로그인' : '구글로 회원가입'}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                icon = {true}
            />

        </div>
        <div className={styles.column}>
                <span className={styles.bottomColorLinkText}>
                    {swipeLoginButton(props)}
                </span>
        </div>

    </main>
);

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