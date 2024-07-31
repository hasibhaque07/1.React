import React, { useState } from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'


export default function Home() {
    const dummyTodos = ["todo1", "todo2"];

    const [todos, setTodos] = useState(dummyTodos)

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }
    return (
        <div>
            <NewTodo addTodo = {handleNewTodo}/>
            <Todos todos = {todos}/>
        </div>
    )
}
