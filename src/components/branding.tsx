import React from "react";
import styles from "./sass/branding.module.scss";

const HomePage = () => {
  return (
    <div className={styles.leftContainer}>
      <img src = './images/black-food2.jpg' alt='bgpic' className={styles.mainImg}></img>
    </div>
  );
};

export default HomePage;
