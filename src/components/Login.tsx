import React from 'react'
import styles from './sass/login.module.scss';

const Login = () => {
  return (
    
    <form className={styles.loginForm} action="#" onSubmit={()=>console.log(`submitted`)}>
      <input type="text" className={styles.textField} placeholder='Email' />
      <input type="password" className={styles.textField} placeholder='Password' />
      <button type="submit" className={styles.submitButton}>Login</button>
    </form>
   
  )
}

export default Login