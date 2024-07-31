import React, { useState } from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'
import style from './Home.module.css'
import {v4 as uuidv4} from 'uuid';

export default function Home() {
    /*const dummyTodos = [
        {
            id: 1,
            title: 'todo1',
            desc: 'todo1 desc'
        },
        {
            id: 2,
            title: 'todo2',
            desc: 'todo2 desc'
        },
    ]*/

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }

    const handleRemoveTodo = (id) =>{
        
        setTodos((prevTodos) =>{
            const filteredTodos = todos.filter((todo) => todo.id != id);
            return filteredTodos;
        })
    }
    return (
        <div className= {style.container}>
            <h1 className={style.title}>Todo App</h1>
            <NewTodo addTodo = {handleAddTodo}/>
            <Todos todos = {todos} onRemoveTodo = {handleRemoveTodo}/>
        </div>
    )
}
