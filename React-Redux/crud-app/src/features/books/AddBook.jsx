import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {id: numberOfBooks + 1, title, author};
        dispatch(addBook(book));
        navigate('/show-books', {replace: true});
    }
    return (
        <div>
            <h2>Add book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = 'title'>Title: </label>
                    <input type = 'text' id = 'title' name = 'title' value = {title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor = 'author'>Author: </label>
                    <input type = 'text' id = 'author' name = 'author' value = {author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <button type='submit'>Add book</button>
            </form>
        </div>
    )
}

export default AddBook
