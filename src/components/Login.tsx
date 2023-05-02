import React from 'react'
import './sass/login.scss';

const Login = () => {
  return (
    <form className='loginForm' action="#" onSubmit={()=>console.log(`submitted`)}>
      <input type="text" className='textField' placeholder='Username' />
      <input type="text" className='textField' placeholder='Password' />
    </form>
  )
}

export default Login