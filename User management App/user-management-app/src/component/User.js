import React from 'react'
//import { UsersContext } from '../Context/UsersContext';
import { useUsersContext } from '../hooks/useUsersContext';

const User = ({user}) => {
    const {id, username} = user;

    //const {users, setUsers} = useContext(UsersContext);
    const {users, setUsers} = useUsersContext();

    const handleDelete = (id) =>{
       
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
    }

    return (
        <div className='user'>
            
            <p><b>User Name: </b>{username}</p>
            <p><b>User Id: </b>{id}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default User
