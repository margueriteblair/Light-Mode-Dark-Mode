import React from 'react'
import Button from './Button'

import Form from './Form'
import { regInputs } from '../utils/userInputs'
import {regReq} from '../utils/userRequests'

export default function Register() {
    const loginLink = '/login'
    return (
        <div>
            <h1>Create a New Account</h1>
            <br></br>
            <Form
                id='registerForm'
                title='Register'
                inputs={regInputs}
                submitFunc={regReq}
            />

            <Button

            onClick= {() => {window.location = loginLink}}
            text='Already Have An Account? Login'/>

        </div>
    )
}
