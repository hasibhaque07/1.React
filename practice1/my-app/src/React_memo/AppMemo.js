import React, { useCallback, useState } from 'react'
import Message from './Message';

const AppMemo = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    console.log('AppMemo rendering');

    // const handleIncreamet = () => {
    //     setCount(count + 1);
    // }
    const handleIncreamet = useCallback(() => {
        setCount(count + 1);
    },[count])

    return (
        <div>
            {toggle ? 'on' : 'off'}
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <Message count = {count} onHandleIncreament = {handleIncreamet}/>
        </div>
        
    )
}

export default AppMemo
