import React, { useState } from 'react'
import User from './User'
import User2 from './User2';

const Users = () => {

    const [userName, setUserName] = useState("Hasib");
    const [userId, setUserId] = useState();

    const [user, setUser] = useState({
        id: 101,
        name: 'hasib haque'
    });

    return (
        <>
            <User userName = {userName} userId = {userId}/>
            <User2 user = {user}/>
        </>
    )
}

export default Users
