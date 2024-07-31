import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const CounterView = () => {

    const count = useSelector(state => state.counterr.count);
    const count2 = useSelector(state => console.log(state));
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>IncreaseBy5</button>
        </div>
    )
}

export default CounterView
