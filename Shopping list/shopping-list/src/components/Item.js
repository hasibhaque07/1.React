import React, { useState } from 'react'

const Item = (props) => {

    const {id, item} = props.item;
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <input type='checkbox' onChange={() => setIsChecked(!isChecked)}></input>
            {isChecked ? <strike>{item}</strike> : <span>{item}</span>}
            <button onClick={() => props.deleteItem(id)}>Delete</button>
            
        </div>
    )
}

export default Item
