import React from 'react'
import HomePage from './leftPanel'
import Login from './rightPanelLogin'
import styles from '../../components/sass/page.module.scss'

const Maincontainer = () => {
  return (
    <div className={styles.mainContainer}>
        <HomePage/>
        <Login/>
    </div>
  )
}

export default Maincontainer