import React from 'react'
import { useSelector } from 'react-redux'

const Counterr = () => {
  const count = useSelector((state) => console.log(state));
  //console.log(count);
  return (
    <div>
      counterr
      <h1>count: 0</h1>
      <button>Increment</button>
    </div>
  )
}

export default Counterr
