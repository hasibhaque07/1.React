import React, { useState } from 'react'

import { FaTrashCan } from "react-icons/fa6";
import style from './Todo.module.css'

export default function Todo(props) {

    const[isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () =>{
        setIsChecked(!isChecked);
    }
    const handleRemoveItem = (id) =>{
        props.onRemoveTodo(id);
       
    }

    return (
        <div className={style.todo_container}>
            <input type='checkbox' checked = {isChecked} onChange={handleCheckboxChange} className={style.checkBox}/>
            {isChecked ? <strike className={style.txt}>{props.task}</strike> : <span className={style.txt}>{props.task}</span>} 
            <FaTrashCan onClick={() => {handleRemoveItem(props.id)}} className={style.delete_btn}/>
            
        </div>
    )
}
