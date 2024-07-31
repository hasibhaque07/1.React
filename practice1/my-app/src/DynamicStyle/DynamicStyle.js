import React, { useEffect, useState } from 'react'

import './Dynamicstyle.css'

const DynamicStyle = () => {

    const [isValid, setIsValid]  = useState(false);
    const [item, setItem] = useState('');

    useEffect(() =>{
        console.log("UseEffect");
        if(item.length >= 2){
            setIsValid(true);
        }
        else setIsValid(false);
        console.log(item.length);
    }, [item])

    const handleChange = (e) => {

        setItem(e.target.value);
        //e.target.value.length
        /*if(e.target.value.length >= 2){
            setIsValid(true);
        }
        else setIsValid(false);
        console.log(e.target.value.length);*/
    }

    //style = {{backgroundColor: isValid ? 'green' : "red"}}

    return (
        <div>
            <input type='text' 
                onChange={handleChange}
                
                className= { `${isValid ? 'valid' : 'invalid'}`}
            />
        
        </div>
    )
}

export default DynamicStyle
