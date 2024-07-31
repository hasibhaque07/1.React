import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        title : "todo1",
        desc  : "description1",
    },
    {
        title : "todo2",
        desc  : "description2",
    },
    {
        title : "todo3",
        desc  : "description3",
    }
]
function List(){
    return(
        <div>
            {todos.map((todo)  => {
                 return <div key = {uuidv4()}>
                    
                    <h3>{todo.title}</h3>
                    <p>{todo.desc}</p>
                 </div>
            })}
               
        </div>
    );
}

export default List;