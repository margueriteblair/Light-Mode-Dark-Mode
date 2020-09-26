import React from 'react';
import Button from './Button';
import Form from './Form';

import { loginReq } from '../utils/userRequests'
import { loginInputs } from '../utils/userInputs';

export default function Login() {

    const regLink = '/register';

    return (
        <div>
            <br/>

            <Form
                id='loginForm'
                inputs={loginInputs}
                title='Login to Your Account!'
                submitFunc={loginReq}
            />
            
            <Button 
            onClick= {() => {window.location = regLink}}
            text='Register button'/>
        </div>
    )
}
