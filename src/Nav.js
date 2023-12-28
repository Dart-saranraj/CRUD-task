import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
        <u>
            <li><Link to="/Info">Info</Link></li>
            <li><Link to="/About">About</Link></li>
        </u>
    </nav>
  )
}

export default Nav