import React from 'react';

import { useUserContext } from '../context/UserContext';
import './User.css';

const User = ({user}) => {
    
    const {id, name} = user;

    const {users, setUsers, darkMode} = useUserContext();
    
    const handleDelete = (id) =>{
        const filterUser = users.filter(user => user.id !== id);
        setUsers(filterUser);
    }

    const themeStyle = {
        backgroundColor: darkMode ? '#333' : 'bisque',
        color: darkMode ? '#CCC' : '#333',
        padding: '10px',
        margin: '10px',
    }
    
    return (
        <div style={themeStyle}>
            <p>{id}</p>
            <p>{name}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default User
