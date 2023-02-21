import React from "react";
import styles from "./Logos.module.css";
import Logo from "./Logo";

import appleLogo from "../images/appleLogo.png";
import xiaomiLogo from "../images/xiaomiLogo.png";
import samsungLogo from "../images/samsungLogo.png";

const Logos = () => {
  return (
    <div className={styles.container}>
      <p>Who supports us?</p>
      <div className={styles.logosContainer}>
        <Logo brand={appleLogo} />
        <Logo brand={samsungLogo} />
        <Logo brand={xiaomiLogo} />
      </div>
    </div>
  );
};

export default Logos;
