import React from 'react'
import {useTheme, useThemeUpdate} from '../hooks/ThemeContext'

export default function Control() {

    const theme = useTheme();
    const updateTheme = useThemeUpdate();

    //setTheme()
    
    return (
        <div>
        <h1>
            {theme ? 'Light Mode' : 'Dark Mode'}
        </h1>

        <button
            onClick={updateTheme}
        >
            Toggle Theme 
        </button>
        </div>
    )
}