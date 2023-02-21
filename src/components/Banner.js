import React from 'react';
import styles from "./Banner.module.css"
import banner from "../images/banner.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img  src={banner} alt="main banner"/>
            <div className={styles.textContainer}>
                <h1>ItsMeArash</h1>
                <p>
                    I'm learning <span>ReactJS</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;