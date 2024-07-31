import React, { useState, useReducer } from 'react'

import {v4 as uuidv4} from 'uuid'

const booksData = [
    {id: 1, name: 'lean startup'},
    {id: 2, name: 'zero to one'},
    {id: 3, name: '4 hrs work week'}
];

const Modal = ({modalText}) =>{
    return <p>{modalText}</p>
}

const reducer = (state, action) => { //it will take prev state as paramener , action.type, action.payload
    if(action.type === 'ADD'){
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: 'Book is added'
        }
    }
    if(action.type === 'REMOVE'){
        const filteredBooks = state.books.filter((book) => book.id !== action.payload)
        return{
            ...state,
            books: filteredBooks,
            isModalOpen: true,
            modalText: 'Book is removed'
        }
    }
    return state;
}



const useReducerExample = () => {

    // const [books, setBooks] = useState(booksData);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [modalText, setModalText] = useState('');

    // const [] = useReducer(reducer, initialState)

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ''
    })
    
    const [bookName, setBookName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {id: uuidv4(), name: bookName};
        dispatch({type:'ADD', payload: newBook})
        // setBooks((prevState) =>{
        //     const newBook = {id: uuidv4(), name: bookName};
        //     return [...prevState, newBook];
        // })
        // setBookName('');
        // setIsModalOpen(true);
        // setModalText('Book is added');
    }

    const removeBook = (id) =>{
        dispatch({type : 'REMOVE', payload: id})
    }

    return (
        <div>
            <h1>Book List</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={bookName} onChange={(e) => {setBookName(e.target.value)}}/>
                <button type='submit'>Add Book</button>
            </form>
            {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}
            {bookState.books.map((book) =>{
                const {id, name} = book;
                return <li key={id}>{name}<button onClick={() => removeBook(id)}>Remove</button></li>
            })}
        </div>
    )
}

export default useReducerExample
