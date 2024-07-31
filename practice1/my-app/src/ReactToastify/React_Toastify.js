import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const React_Toastify = () => {
    const handleAddTodo = () => {
        toast('New Todo added');
    }
    return (
        <div>
            <h1>Todo App</h1>
            <button onClick={handleAddTodo}>ADD New Todo</button>
            <ToastContainer />
        </div>
    )
}

export default React_Toastify
