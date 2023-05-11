import React from 'react'
import '../sass/Navbar.scss'
import { useNavigate } from 'react-router-dom'

const Navbar = ()  => {
  const navigate = useNavigate();
  function handleClick(route:string){
        navigate(route);
  }
  return (
    <div className='navWrapper' >
        <nav  className='main-nav' >
          <img src="./images/zomato-logo.png" alt="logo" />
            <ul onClick={()=>handleClick('/')}>Home</ul>
            <ul onClick={()=>handleClick('#')}>Login</ul>
            <ul onClick={()=>handleClick('#')}>Create An Account</ul>
        </nav>
    </div>
  )
}

export default Navbar;