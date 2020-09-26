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
        <div>
            
        </div>
    )
}
