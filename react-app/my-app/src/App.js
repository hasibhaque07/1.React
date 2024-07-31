import React from 'react';
//import ReactDOM from 'react-dom/client';
import Card from './Components/Card'
import Data from './data.json'
import List from './Components/UniqueList/List'
import Users from './Components/UniqueList/Users'

//let items = [];
/*for(let x = 0; x < Data.length; x++){
  items.push(<Card title = {Data[x].title} desc = {Data[x].desc}/>);
}
*/
//items = Data.map((item) => <Card title = {item.title} desc = {item.desc}/>)

function App() {
  return (
    <div>
      <h1 className="title si">My CARD</h1>
      {/*Data.map((item, index) => <Card key = {index} title = {item.title} desc = {item.desc}/>)*/}
      <List />
      <Users />


      
      
  </div>
    
  );
}

export default App;
