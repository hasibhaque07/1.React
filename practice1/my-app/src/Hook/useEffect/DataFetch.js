import React, { useEffect, useState } from 'react'

const DataFetch = () => {

    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() =>{
       setTimeout(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            if(!res.ok){
                throw Error('Fetching is not successful');
            }
            else{
                return res.json();
            }
            
        })
        .then((data) => {
            setTodos(data);
            setError(null);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false);
        })
       }, 2000)
    }, []);

    const todosElements = todos && todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
    })
    /*const todosElements = todos ? (todos.map((todo) => {
                            return <p key={todo.id}>{todo.title}</p>;
                            })): (<p>Data is loading</p>) */

    return (
        <div>
            <h1>Todos</h1>
            {error && <p>{error}</p>}
            {loading && <p>Todo is loading...</p>}
            {todosElements}
        </div>
    )
}

export default DataFetch
