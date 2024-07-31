import React, { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import AddBlog from '../Pages/AddBlog'
import About from '../Pages/About'
import Error from '../Pages/Error'
import Navbar from '../layout/Navbar'
import Protected from './Protected'

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                {isLoggedIn ? <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button> : <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>}
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    {/* <Route path='/add-blog' element={<AddBlog/>}/> */}
                    <Route path='/add-blog' element={<Protected isLoggedIn={isLoggedIn}>
                        <AddBlog/>
                    </Protected>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/*' element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Index
