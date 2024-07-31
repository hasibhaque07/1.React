import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import Blog from './Pages/Blog'
import Error from './Pages/Error'
import User from './Pages/User'
import NavBar from './components/NavBar'
import './App.css'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            {/* <nav>
                <ul>
                    <a href='/'>Home</a><br/>
                    <a href='/blogs'>Blogs</a><br/>
                    <a href='/contact'>Contact</a>
                </ul>
            </nav> */}
            <NavBar />
            <Routes>
                <Route path = '/home' element = {<Home/>}/>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/contact' element = {<Contact />} />
                <Route path = '/blogs' element = {<Blogs />}/>
                <Route path = '/blogs/:title' element = {<Blog />}/>
                <Route path = '*' element = {<Error />}/>
                <Route path = '/user/:userid' element = {<User />}/>
                <Route path = '/user' element = {<User />}/> 
                 
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
