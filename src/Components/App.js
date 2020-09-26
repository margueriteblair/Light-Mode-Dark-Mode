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
  return (
<BrowserRouter>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<>
    <GlobalStyles />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>{theme === 'light' ? "It's light theme, bitch!" : "Welcome to the darkside."}</h1>
        <h3>{theme === 'light' ? 'Please choose an option below:' : 'Oh, and welcome to our application:'}</h3>
        <div className="homepageBtns" style={{justifyContent: "space-evenly", textAlign: "center", flexDirection: "row", display: "flex"}}>
        <Button text='Login'></Button>
        <Button text="Register" ></Button>
  </div>
  <AppRouter/>
    <footer>
    </footer>
</>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
