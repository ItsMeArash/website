import React from 'react';
import styles from "./Navbar.module.css"

import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to='/'>Homepage</Link></li>
                    <li><Link to='products'>Products</Link></li>
                    <li><Link to='about'>About Us</Link></li>
                </ul>
            </div>
            <div>
                <img className={styles.logo} src={logo} alt="ItsMeArash Logo"/>
            </div>
        </header>
    );
};

export default Navbar;