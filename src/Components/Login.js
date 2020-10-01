import React from 'react';
import Button from './Button';
import Form from './Form';

import { loginReq } from '../utils/userRequests'
import { loginInputs } from '../utils/userInputs';

export default function Login(props) {

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
            { props.loggedIn ? (
                <div>
                    <p>Already signed in!</p>
                    <Button text="Return Home" onClick={() => {window.location = '/'}}/>
                </div>
            ) : (
                <div>
                    <p>No Account?</p>
                    <Button 
                    onClick= {() => {window.location = regLink}}
                    text='Register button'/>
                </div>
            )}
            
        </div>
    )
}
