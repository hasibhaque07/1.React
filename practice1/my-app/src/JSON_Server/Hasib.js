import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Hasib = () => {

    const [users, setUsers] = useState([]);

    const getAllUsers = async() =>{
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
    }

    useEffect(() =>{
        getAllUsers();
    },[])

    return (
        <div>
            {users.map((user) =>{
                return <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            })}
        </div>
    )
}

export default Hasib
