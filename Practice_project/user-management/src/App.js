import React from 'react';

import NewUser from './components/NewUser';
import Users from './components/Users';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
       <NewUser />
       <Users />
    </UserProvider>
  )
}

export default App
