import React, { useState } from 'react';

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
        {/* <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>{theme === 'light' ? "It's light theme, bitch!" : "Welcome to the darkside."}</h1>
        <h3>{theme === 'light' ? 'Please choose an option below:' : 'Oh, and welcome to our application:'}</h3>
    <div className="homepageBtns" style={{justifyContent: "space-evenly", textAlign: "center", flexDirection: "row", display: "flex"}}>
        <Button text='Login'></Button>
        <Button text="Register" ></Button>
        </div> */}
        </div>
    )
}
