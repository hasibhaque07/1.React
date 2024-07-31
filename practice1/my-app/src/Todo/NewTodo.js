import React, { useState } from 'react'

export default function NewTodo(props) {

    const [todo, setTodo] = useState('')

    const handleOnChange = (e) =>{
        setTodo(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addTodo(todo);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>New Todo: </label>
            <input type='text' name='todo' id='todo' onChange={handleOnChange}/>
            <button>Add Todo</button>
        </form>
    )
}
