import React, {useState} from 'react';
import { ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import { GlobalStyles } from './global'

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
    
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<>
    <GlobalStyles />
    <button onClick={toggleTheme}>Toggle Theme</button>
    <h1>{theme === 'light' ? "It's light theme, bitch!" : "Welcome to the darkside."}</h1>
    <footer>
    </footer>
</>
    </ThemeProvider>
    
  );
}

export default App;
