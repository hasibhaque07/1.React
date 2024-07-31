import React, { useState } from 'react'

const NewItem = (props) => {

    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.handleNewItem(newItem);
        setNewItem('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
                <button type='submit'>Add item</button>
            </form>
        </div>
    )
}

export default NewItem
