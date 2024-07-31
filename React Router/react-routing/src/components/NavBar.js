import React from 'react'

import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav-container'>
        {/* <Link to = '/' className='nav-item'>Home</Link> */}
        <NavLink to = '/' className='nav-item'>Home</NavLink> 
        <NavLink to = '/blogs' className='nav-item'>Blogs</NavLink>
        <NavLink to = '/contact' className='nav-item'>Contact</NavLink>
    </nav>
  )
}

export default NavBar
