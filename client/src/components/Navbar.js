import React from 'react';
import styles from '../styles/modules/navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>Github issue tracker</span>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                         alt="user avatar" 
                         className={styles.avatar} />
                </li>
                <li className={styles.listItem}>Manson Doe</li>
                <li className={styles.listItem}>Logout</li>
            </ul>
        </div>
    );
};

export default Navbar;