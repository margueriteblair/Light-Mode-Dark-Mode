import React from 'react';
import { ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import { globalStyles } from '.global'

function App() {
  return (
    
    <ThemeProvider theme={lightTheme}>
<>
    <button>Toggle Theme</button>
    <h1>It's light theme, bitch!</h1>
    <footer>
    </footer>
</>
    </ThemeProvider>
    
  );
}

export default App;
