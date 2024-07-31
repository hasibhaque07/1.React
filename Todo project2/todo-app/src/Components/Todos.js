import React from 'react'

import Todo from './Todo'
import style from './Todos.module.css'


export default function Todos(props) {
  return (
    <div className={style.todos_container}>
        {props.todos.map((todo) => 
            <Todo key = {todo.id} task = {todo.task} id = {todo.id} onRemoveTodo = {props.onRemoveTodo}/>)
        }
    </div>
    
  )
}
