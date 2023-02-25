import React from 'react';
import styles from '../styles/modules/login.module.scss';
import GithubIcon from '../images/github.png'

const Login = () => {
    return (
        <div className={styles.login}>
            <h1 className={styles.loginTitle}>Login with your Github</h1>
            <div className={styles.wrapper}>
                <div className={`${styles.loginButton} ${styles.github}`}>
                    <img src={GithubIcon} alt="github icon" className={styles.icon} />
                    Github OAuth
                </div>
            </div>
        </div>
    );
};

export default Login;