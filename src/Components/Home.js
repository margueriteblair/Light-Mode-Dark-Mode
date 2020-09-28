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
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>{theme === 'light' ? "It's light theme, bitch!" : "Welcome to the darkside."}</h1>
        <h3>{theme === 'light' ? 'Please choose an option below:' : 'Oh, and welcome to our application:'}</h3>
        <div className="homepageBtns" style={{justifyContent: "space-evenly", textAlign: "center", flexDirection: "row", display: "flex"}}>
        <Button text='Login' onClick= {() => {window.location.href = loginLink}}></Button>
        <Button text="Register" onClick= {() => {window.location.href = regLink}} ></Button>
  </div>
        </div>
        </ThemeProvider>
    )
}
