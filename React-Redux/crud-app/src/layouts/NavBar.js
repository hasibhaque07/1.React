import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to = '/'>Home</Link>
        <Link to = '/show-books'>Show Books</Link>
        <Link to = '/add-book'>Add Book</Link>
    </div>
  )
}

export default NavBar
