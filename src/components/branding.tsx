import React from "react";
import styles from "./sass/branding.module.scss";

const HomePage = () => {
  return (
    <div className={styles.leftContainer}>
      <img src = './images/black-food2.jpg' alt='bgpic' className={styles.mainImg}></img>
      <img src="./images/zomato_logo_.png" alt="zomaLogo" className= {styles.logoImg} />
    </div>
  );
};

export default HomePage;
