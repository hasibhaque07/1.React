import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {

    const [count, setCount] = useState(0);

    const handleChange = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("useEffect");
    }, []);

    return (
        <div>
            {console.log("rendering")}
            <h1>Count: {count}</h1>
            <button onClick={handleChange}>+</button>
        </div>
    )
}

export default UseEffectExample
