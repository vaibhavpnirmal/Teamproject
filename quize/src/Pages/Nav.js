import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
        <img alt='logo' src='/images/velocitylogo.png'></img>
        <div className='text'>
            <div className='navtext'>
                <p>Velocity Corporate Training Center, Pune</p>
<p>Our AIM is 1 Job = 1 FAMILY = 5 PERSON</p>
            </div>
            <div className='headerlinks'>
            
            <Link to='/about'>About</Link>
            <Link to='/contact-us'>Contact-us</Link>
            <Link to='/upcommingbatch'>upcomming batches</Link>
            <Link to='about'>Ref earn</Link>
            <Link to='#'>Cources</Link>

            </div>
        </div>
      
    </div>
  )
}

export default Nav
