import React, { useState } from 'react'

import style from './NewTodo.module.css'

export default function NewTodo(props) {
    
    const [todo, setTodo] = useState({title: "", desc: ""});
    const {title, desc} = todo;

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return{...oldTodo, [name]: e.target.value}
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo({title: "", desc:""});
    }
    return (
        <div className={style["newTodo-container"]}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input type='text' name='title' id='title' value={title} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='dsc'>Title: </label>
                    <textarea type='text' name='desc' id='desc' value={desc} onChange={handleChange}/>
                </div>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}
