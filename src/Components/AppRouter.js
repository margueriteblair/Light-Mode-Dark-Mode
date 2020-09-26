import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import useTheme from '../hooks/useTheme';
import Control from './Control';

export default function AppRouter() {

    const [ theme, setTheme ] = useTheme(true);


    return (
        <div>
        <Switch>
            <Route
                path='/' exact>
                <Home />
            </Route>
            <Route
                exact path='/login'
            >
                <Login />
            </Route>
            <Route
                exact path='/register'
            >
                <Register />
            </Route>
        </Switch>
        </div>
    )
}
