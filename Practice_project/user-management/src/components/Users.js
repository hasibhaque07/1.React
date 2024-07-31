import React from 'react';
import { useUserContext } from '../context/UserContext';
import User from './User';

const Users = () => {
    const {users} = useUserContext();
    const {darkMode, setDarkMode} = useUserContext();
    
    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
            {users.map(user => <User key={user.id} user={user}/>)}
        </>
    )
}

export default Users
