import React, { useState } from 'react'

import NewTask from './Components/NewTask'
import Todos from './Components/Todos';
import {v4 as uuidv4} from "uuid";
import style from './App.module.css'

export default function App() {

    const [todos, setTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    const timeOut = () =>{
      setTimeout(() => {
          setIsModalOpen(false);
      },1000)
    }

    const handleAddNewTask = (newTask) => {
        
        if(newTask === ''){
            setIsModalOpen(true);
            setModalText('Task is empty'); 
            timeOut();   
        }
        else{
            setTodos((prevTodos) => {
              return [...prevTodos,{id: uuidv4(), task: newTask}]
            })
            setIsModalOpen(true);
            setModalText('Task is added');
            timeOut();
        }
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
          const filteredTodo = todos.filter((todo) => todo.id !== id)
          return filteredTodo;
        })
        setIsModalOpen(true);
        setModalText('Task is removed');
        timeOut();

    }
    
    return (
      <div className={style.app_container}>
          
          <NewTask addNewTask = {handleAddNewTask} />
          {console.log(todos)}
          <Todos todos = {todos} onRemoveTodo = {handleRemoveTodo}/> 
          {isModalOpen && <span className={style.modal_text}>{modalText}</span>}
      </div>
    )
}
