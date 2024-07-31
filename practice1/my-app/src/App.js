import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import MyApp from './Hook/UseContext/MyApp'
import './Style.css'







function App() {
  const handleChildData = (childData) =>{
    console.log(childData);
  }
  return (
    /*<div>
       <Card2 hasib = 'hasib'/>
       <Card3 hasib = 'hasib'/>
       
    </div>*/
    /*
    <div className='container'>
      <Icon />
      <div className='card-container'>
        <Bootstrap />
        <Bootstrap />
        <Bootstrap />
        <Bootstrap />
      </div>
      <div>
        <State />
      </div>
    </div>*/
    /*
    <diiv>
        <Conditional_Rendering />
    </diiv>*/

    /*<div>
        <Event />
    </div>*/
    /*
    <div>
        <FunctionalHooks/>
    </div>*/
    /*<div>
        <Form2 />
    </div>*/
    /*<div>
        <Child childData = {handleChildData}/>
    </div>*/
    /*
    <div>
        <Home />
    </div>*/
    /*
    <div>
      <Signup/>
    </div>*/
    /*<div>
      <FAQS />
    </div>*/
    /*<div>
      <UseEffectExample/>
    </div>*/
    // <div>
    //    <AppMemo />
    // </div>
    <div>
      <MyApp />
    </div>
        
    
  );
}

export default App;
