import React, { useRef } from 'react'

const UserForm = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();
        
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        
        console.log({userName, password});
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>UserName: </label>
                <input type='text' id='userName' ref={userNameRef}/>
            </div>

            <div>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' ref={passwordRef}/>
            </div>
            <button type='submit'>Register</button>
        </form>
    )
}

export default UserForm
