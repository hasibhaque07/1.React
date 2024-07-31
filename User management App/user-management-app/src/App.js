import React, { useState } from 'react'

import Users from './component/Users'
import NewUser from './component/NewUser'
import { UsersContext } from './Context/UsersContext'

const App = () => {
    const [users, setUsers] = useState([
        {id: 1, username: 'hasib'},
        {id: 2, username: 'haque'}
    ]);

    
   
    return (
        <UsersContext.Provider value={{users, setUsers}}>
            <div>
                <h1 className='heading_text'>Add new user</h1>
                <NewUser/>
                <Users />
            </div>
        </UsersContext.Provider>
    )
}

export default App
