import React from 'react';
import Button from './Button'

export default function Home(props) {
    const loginLink = '/login';
    const regLink = '/register';
    if (props.loggedIn) {
      return (
        <div>
          <h1>Welcome, {props.user}</h1>
          <img src='../utils/KoolAid.gif'/>
        </div>
      )
    } else {
      return (
          <div className="homepageBtns" style={{justifyContent: "space-evenly", textAlign: "center", flexDirection: "row", display: "flex"}}>
          <Button text='Login' onClick= {() => {window.location.href = loginLink}}></Button>
          <Button text="Register" onClick= {() => {window.location.href = regLink}} ></Button>
          </div>
      )
      
    }
}
