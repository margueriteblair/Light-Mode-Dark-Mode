import React from 'react';
import Button from './Button';
import Form from './Form';

import { loginReq } from '../utils/userRequests'
import { loginInputs } from '../utils/userInputs';

export default function Login() {

    const regLink = '/register';

    return (
        <div>
            <h1>
                Login To Your Account
            </h1>
            <br/>

            <Form
                id='loginForm'
                inputs={loginInputs}
                title='Login!'
                submitFunc={loginReq}
            />
            
            <Button 
            onClick= {() => {window.location = regLink}}
            text='Register button'/>
        </div>
    )
}
