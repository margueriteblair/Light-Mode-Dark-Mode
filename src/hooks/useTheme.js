import React, {useState, useEffect} from 'react';

import {get, set} from '../utils/localStorage';

export default (initalVal) => {

    const [theme, setTheme] = useState( () => {

        //console.log('init', inital);

        return get ('theme', initalVal)
    })

    useEffect ( () => {

        console.log(`Theme changed to: `, theme);
        
        set('theme', theme)

    })
    //, [theme])


    return [theme, setTheme]
}
