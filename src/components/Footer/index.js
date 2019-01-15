import React from "react"
import styles from "./styles.module.scss"

const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>서비스 소개</li>
                    <li className={styles.listItem}>회원약관</li>
                    <li className={styles.listItem}>개인정보처리방침</li>
                    <li className={styles.listItem}>광고문의</li>
                    <li className={styles.listItem}>고객센터</li>
                    <li className={styles.listItem}>페이스북</li>
                    <li className={styles.listItem}>블로그</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span
                className={styles.copyright}> 상호: \ |  주소: 서울특별시 강남구 테헤란로 84길 11 3층 301호 (주 )비긴메이트 (대치동, 아크힐즈빌딩)  |  <a
                href="/">tel : 02-6713-0817</a></span>
        </div>
        <div className={styles.column}>
            <span
                className={styles.copyright}>사업자등록번호 : 679-87-00428  |  통신 판매업 신고번호 : 제 2018-서울강남-02246호(사업자정보확인)</span>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}>© 2019 Sally UI Kit. All rights reserved</span>
        </div>

    </footer>
);
export default Footer