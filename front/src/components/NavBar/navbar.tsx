import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

type NavBarProps = {
    backgroundColor?: string;
};

const NavBar: React.FC<NavBarProps> = ({ backgroundColor }) => {
    return (
        <header className={styles.navbar} style={{backgroundColor}}>
            <div className={styles.logo}><img src='https://d1w7zrhxbqevdl.cloudfront.net/Monito-logo-complete.svg' /></div>
            <nav className={styles.links}>
                <Link to="/" className={styles.homeNav}>Home</Link>
                <a href='#'>Category</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </nav>
            <div className={styles.searchContainer}>
                <input type='text' placeholder='Search something here!'  />
            </div>
            <button className={styles.joinButton}>Join the community</button>
            <div className={styles.locale}>
                <span className={styles.flag}>🔴</span>
                <span>VND</span>
                <span>▼</span>
            </div>
        </header>
    )
};

export default NavBar;