import React, {useState} from 'react'
import style from './form.module.css'

export default function Form2() {

    const [user, setUser] = useState({name : '', email : '', password : ''});
    const {name, email, password} = user; //destructuring
    
    
    const HandleChange = (e) =>{

        setUser({...user,[e.target.name]: e.target.value}); //spread operator, add new value to prev values
        /*const fieldName = e.target.name;
        
        if(fieldName === 'name'){
            setUser({name: e.target.value, email, password});    
        }
        else if(fieldName === 'email'){
            setUser({name, email: e.target.value, password});       
        }
        else if(fieldName === 'password'){
            setUser({name, email, password: e.target.value});     
        }*/
        
    }
    const SubmitForm = (e) =>{
        console.log("Form is submitted");
        e.preventDefault();
        console.log(user);
    }

    

    
    return (
        <div>
            <h1>Registration Form</h1>
            <form action='' onSubmit={SubmitForm}>
                <div className={style.formGroup}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' id='name' onChange={HandleChange}></input>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' id='email' onChange={HandleChange}></input>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' onChange={HandleChange}></input>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}
