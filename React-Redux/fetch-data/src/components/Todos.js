import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const {todos, isLoading, error} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
        //getAllTodos();
    }, [])
   
    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {todos && todos.map(todo => {
                return <h4 key={todo.id}>{todo.title}</h4>
            })}
        </div>
    )
}

export default Todos
