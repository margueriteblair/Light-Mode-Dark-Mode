import React, { useState } from 'react';
import Button from './Button'
import { ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import { GlobalStyles } from './global'

export default function Home() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
    
    const loginLink = '/login';
    const regLink = '/register';
    return (
        <div className="homepageBtns" style={{justifyContent: "space-evenly", textAlign: "center", flexDirection: "row", display: "flex"}}>
        <Button text='Login' onClick= {() => {window.location.href = loginLink}}></Button>
        <Button text="Register" onClick= {() => {window.location.href = regLink}} ></Button>
        </div>
    )
}
