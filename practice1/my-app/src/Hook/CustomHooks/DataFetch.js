import React, { useEffect, useState } from 'react'

import useFetch from './useFetch';

const DataFetch = () => {

    //const [data, setData] = useFetch('https://jsonplaceholder.typicode.com/todos');
    const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/todos');
    

    const todosElements = data && data.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
    })
    /*const todosElements = todos ? (todos.map((todo) => {
                            return <p key={todo.id}>{todo.title}</p>;
                            })): (<p>Data is loading</p>) */

    return (
        <div>
            <h1>Todos</h1>
            {error && <p>{error}</p>}
            {isLoading && <p>Todo is loading...</p>}
            {todosElements}
        </div>
    )
}

export default DataFetch
