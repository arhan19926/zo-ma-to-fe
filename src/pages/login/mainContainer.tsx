import React from 'react'
import HomePage from './leftPanel'
import Login from './rightPanelLogin'
import styles from '../../pages/sass/login/mainContainer.module.scss'

const Maincontainer = () => {
  return (
    <div className={styles.mainContainer}>
        <HomePage/>
        <Login/>
    </div>
  )
}

export default Maincontainer