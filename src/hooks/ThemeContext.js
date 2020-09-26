import React, {useState, useEffect, useContext, createContext} from 'react';

const { get, set } = require('../utils/localStorage');
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) { //provides context to all componenets to the function

    const [theme, setTheme] = useState( () => {
        return get('theme', true) //starts us off in lightmode. light= true
    })

    useEffect( () => {
        set('theme', JSON.stringify(theme))
        console.log('The Theme Changed:', theme);

        document.getElementById('root').style.backgroundColor= theme ? 'white' : 'black';
    }, [theme])//when theme changes use this function

    const themeToggle = () => {
        setTheme(currentTheme => !currentTheme)
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={themeToggle}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}