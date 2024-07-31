import React, {useState} from 'react'
import style from './form.module.css'

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Name = (e) =>{
        setName(e.target.value)
    }
    const Email = (e) =>{
        setEmail(e.target.value)
    }
    const Password = (e) =>{
        setPassword(e.target.value)
    }
    const SubmitForm = (e) =>{
        console.log("Form is submitted");
        e.preventDefault();
    }

    let userInfo = {
        name: name,
        email: email,
        password: password
    }

    console.log(userInfo);
    return (
        <div>
            <h1>Registration Form</h1>
            <form action='' onSubmit={SubmitForm}>
                <div className={style.formGroup}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' id='name' onChange={Name}></input>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' id='email' onChange={Email}></input>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' onChange={Password}></input>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}
