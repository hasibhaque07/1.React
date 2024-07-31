import React from 'react'

import { FaTrashAlt } from 'react-icons/fa';
import style from './Todo.module.css'

export default function Todo(props) {
    const {title, desc} = props.todo;
    const {id} = props;

    const handleClick = (id) => {
        props.onRemoveTodo(id);
    }

    return (
        <article className={style.todo_container}>
            <div className={style.text_container}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className={style.btn_container}>
                <button className={style.btn} onClick={() => {handleClick(id)}}>
                    <FaTrashAlt/>
                </button>
            </div>
        </article>
    )
}
