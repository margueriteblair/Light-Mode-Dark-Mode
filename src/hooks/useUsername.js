import React, { useState, useEffect } from 'react';

const { get, set } = require('../utils/localStorage');

export default function useName(initial) {
    const [username, setUsername] = useStte( () => {
        return get('username', initial);
    })

    useEffect(() => {
        console.log(`${username} is the current user logged in.`)
        set('username', JSON.stringify(username))
    }, [username])

    return [username, setUsername]
}