import React from 'react'
import Button from './Button'
import Input from './Input'

export default function Form(props) {
    const buttonOnclick = () => {
        props.submitFunc(document.getElementById(props.id))
    }

    return (
        <div>
            <h2>
                {props.title}
            </h2>  
            <form
            id={props.id}
            >
                { //nested in { } because its in JS
                    Array.isArray(props.inputs)
                    ? props.inputs.map( inProps => 
                        //{
                        //return ( //will return an array of inputs
                            <Input
                            name={inProps.name}
                            ph={inProps.ph}
                            type={inProps.type}
                            style={inProps.style}
                            id={inProps.id}
                            onChange={inProps.onChange}
                            key={inProps.name} //giving each input a unique key, react wants child elements to have its own key
                            />
                        //)
                    //})
                    ): 'Dev Warning! No Inputs, Check Code'
                }
                </form>
            <Button
                text={'Submit'}
                onClick={buttonOnclick}
            />
        </div>
    )
}
