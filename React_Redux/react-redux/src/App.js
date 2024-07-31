import React from 'react';
import Counterr from './component/Counterr';


import { useSelector } from 'react-redux'



const App = () => {
  const count = useSelector((state) => console.log(state));
  return (
    <div>
       <Counterr />
    </div>
  );
}

export default App;
