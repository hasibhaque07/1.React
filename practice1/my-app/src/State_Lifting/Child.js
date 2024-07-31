import React from 'react'

export default function Child(props) {
    const data = "Hello from child";
    props.childData(data);
   //props.childData({Title : 'hello title'}); //passing object
    return (
        <div>
            <h1>THis is child</h1>
        </div>
    )
}
