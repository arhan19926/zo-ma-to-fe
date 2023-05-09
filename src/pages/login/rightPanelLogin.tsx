import React from 'react'
import styles from '../../pages/sass/login/login.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate()
  const handleSubmit =()=>{
    navigate('/home')
  }
  return (
    
    <form className={styles.loginForm} action="#" onSubmit={()=>console.log(`submitted`)}>
      <img src="./images/zomato-logo.png" alt="zomaLogo" className= {styles.logoImg} />
      <input type="text" className={styles.textField} placeholder='Email' />
      <input type="password" className={styles.textField} placeholder='Password' />
      <a className='forgotpass-btn' href='#'>Forgot Password</a>
      <button type ="submit" onClick={handleSubmit} className={styles.submitButton}>Sign In</button>
    </form>
   
  )
}

export default Login