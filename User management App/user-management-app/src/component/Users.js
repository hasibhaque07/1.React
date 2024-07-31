//import React, { useContext } from 'react'
import React, { useContext } from 'react'

import User from './User'
//import { UsersContext } from '../Context/UsersContext'
import { useUsersContext } from '../hooks/useUsersContext';

const Users = () => {

    //const {users} = useContext(UsersContext);
    const {users} = useUsersContext();

    return (
        <div className='users'>
            {users.map((user) => <User key={user.id} user = {user} />)}
        </div>
    )
}

export default Users
