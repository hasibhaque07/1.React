import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import NavBar from '../layouts/NavBar'
import BooksView from '../features/books/BooksView'
import AddBook from '../features/books/AddBook'
import EditBook from '../features/books/EditBook'

const Index = () => {
  return (
    <div>
       <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = '*' element = {<Error />} />
                <Route path = '/show-books' element = {<BooksView />}/>
                <Route path = '/add-book' element = {<AddBook />} />
                <Route path = '/edit-book' element = {<EditBook />} />
            </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Index
