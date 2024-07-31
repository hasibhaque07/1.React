import React, { useState } from 'react'
import './Style.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    const Inc = () =>{
        setCount(count + 1);
    }
    const Dec = () =>{
        setCount(count - 1);
    }
    const Reset = () =>{
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <h1>Counter App</h1>
            <p className='count-value'>{count}</p>
            <div>
                <button className = 'btn' onClick={Inc}>+</button>
                <button className = 'btn' onClick={Dec} disabled = {count === 0 ? true : false}>-</button>
            </div>
            <button className = 'reset-btn' onClick={Reset}>Reset</button>
        </div>
    )
}
