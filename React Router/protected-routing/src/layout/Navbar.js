import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='nav-container'>
            <Link to = '/' className='nav-item'>Home</Link>
            <Link to = '/add-blog' className='nav-item'>Add Blog</Link>
            <Link to = '/about' className='nav-item'>About</Link>
        </nav>
    </div>
  )
}

export default Navbar
