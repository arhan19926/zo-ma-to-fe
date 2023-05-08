import React from 'react'
import styles from './sass/login.module.scss';

const Login = () => {
  return (
    
    <form className={styles.loginForm} action="#" onSubmit={()=>console.log(`submitted`)}>
      <img src="./images/zomato-logo.png" alt="zomaLogo" className= {styles.logoImg} />
      <input type="text" className={styles.textField} placeholder='Email' />
      <input type="password" className={styles.textField} placeholder='Password' />
      <a className='forgotpass-btn' href='#'>Forgot Password</a>
      <button type="submit" className={styles.submitButton}>Sign In</button>
    </form>
   
  )
}

export default Login