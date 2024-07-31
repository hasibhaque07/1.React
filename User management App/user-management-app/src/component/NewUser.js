import React, { useState } from 'react'
//import { UsersContext } from '../Context/UsersContext';
import { useUsersContext } from '../hooks/useUsersContext';

const NewUser = () => {
    const [username, setUserName] = useState('');

    //const {setUsers} = useContext(UsersContext);
    const {setUsers} = useUsersContext();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newUser = {id: new Date().getTime().toString(), username}
        
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setUserName('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='newuser_container'>
                <input type='text' value={username} onChange={(e) => setUserName(e.target.value)}></input>
                <button type='submit'>Add user</button>
            </form>
        </div>
    )
}

export default NewUser

