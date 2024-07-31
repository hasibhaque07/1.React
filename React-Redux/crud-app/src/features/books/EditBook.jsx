import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BooksSlice';

const EditBook = () => {
    
    const location = useLocation();
    
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({id, title, author}));
        navigate('/show-books', {replace: true});
    }
    return (
        <div>
            <h1>Edit Book</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = 'title'>Title: </label>
                    <input type='text' id = 'title' name = 'title' value = {title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor = 'author'>Author: </label>
                    <input type='text' id = 'author' name = 'author' value = {author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <button type='submit'>Update book</button>
            </form>
        </div>
    )
}

export default EditBook
