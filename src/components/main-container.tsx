import React from 'react'
import HomePage from './branding'
import Login from './Login'
import styles from './sass/page.module.scss'

const Maincontainer = () => {
  return (
    <div className={styles.mainContainer}>
        <HomePage/>
        <Login/>
    </div>
  )
}

export default Maincontainer