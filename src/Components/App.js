import React, {useState} from 'react';
import { ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import { GlobalStyles } from './global'
import Button from './Button'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'

function App() {
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
<BrowserRouter>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<>
    <GlobalStyles />
    <AppRouter/>
    <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>{theme === 'light' ? "It's light theme, bitch!" : "Welcome to the darkside."}</h1>
        <h3>{theme === 'light' ? 'Please choose an option below:' : 'Oh, and welcome to our application:'}</h3>
        <div className="homepageBtns" style={{justifyContent: "space-evenly", textAlign: "center", flexDirection: "row", display: "flex"}}>
        <Button text='Login' onClick= {() => {window.location = loginLink}}></Button>
        <Button text="Register" onClick= {() => {window.location = regLink}} ></Button>
  </div>
    <footer>
    </footer>
</>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
