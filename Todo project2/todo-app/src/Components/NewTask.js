import React, { useState } from 'react'

import style from './NewTask.module.css'

export default function NewTask(props) {

    const [newTask, setNewTask] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewTask(newTask);
        //console.log(newTask);
        setNewTask('');
    }

    const handleTextChange = (e) => {
        setNewTask(e.target.value);
    }
    return (
        <div className={style.newTask_container}>
            <form onSubmit={handleSubmit}>
                <h1>Todo App</h1>
                <div>
                    <input type='text' value = {newTask} onChange={handleTextChange} className={style.input_box}></input>
                </div>
                <button type='submit' className={style.btn}>Add task</button>
                
            </form>
        </div>
    )
}
