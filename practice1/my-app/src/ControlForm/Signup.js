import React from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Signup() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, 'name must have at least 2 characters').required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, 'password must have at least 2 characters').required()

        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values: ''});
        }
    })

    const renderNameError = formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>
    const renderEmailError = formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>
    const renderPasswordError = formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' id='name' value={formik.values.name} onChange={formik.handleChange}/>
                </div>
                <br/>
                {renderNameError}

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='text' name='email' id='email' value={formik.values.email} onChange={formik.handleChange}/>
                </div>
                <br/>
                {renderEmailError}

                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange}/>
                </div>
                <br/>
                {renderPasswordError}

                <button type='submit'>Signup</button>

            </form>
        </div>
    )
}
