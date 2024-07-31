import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

const NewUser = () => {
    const [newUser, setNewUser] = useState();

    const {setUsers} = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUserInfo = {id: new Date().getTime().toString(), name: newUser};
        setUsers(prevUsers => [...prevUsers, newUserInfo]);
        setNewUser('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New User: </h1>
            <input type='text' value={newUser} onChange={(e) => setNewUser(e.target.value)}/>
            <button>Add User</button>
        </form>
    )
}

export default NewUser
