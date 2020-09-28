import React, {useState} from 'react';
import { ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import { GlobalStyles } from './global'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'

function App() {
  const [theme, setTheme] = useState('light')


  const loginLink = '/login';
  const regLink = '/register';
  return (
<BrowserRouter>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<>
    <GlobalStyles />
    <AppRouter/>
    <footer>
    </footer>
</>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
