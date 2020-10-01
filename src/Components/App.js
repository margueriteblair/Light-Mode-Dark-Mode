import React, {useState} from 'react';
import { ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import { GlobalStyles } from './global'
import Button from './Button'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
import usePageCount from '../hooks/usePageCounts'

function App() {
  const [theme, setTheme] = useState('light')
  const [pageCount, setPageCount] = usePageCount(0)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      console.log('Theme is dark')
    } else {
      setTheme('light')
      console.log('Theme is light')
    }
  }

  const loginLink = '/login';
  const regLink = '/register';
  return (
<BrowserRouter>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>{theme === 'light' ? "It's light theme, bitch!" : "Welcome to the darkside."}</h1>
        <h3>{theme === 'light' ? 'Please choose an option below:' : 'Oh, and welcome to our application:'}</h3>

      <Button
      onClick={() => {setPageCount(0)}}
      text={`Rest Page Visits: ${pageCount}`}
      />  
    <AppRouter/>
    <footer>
    </footer>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
