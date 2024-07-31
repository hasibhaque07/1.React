import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

export default function FunctionalHooks() {

    const [count, setCount] = useState(0);
    const Inc = () =>{
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={Inc}>Inc</Button>
        </div>
    )
}
