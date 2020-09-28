import React, {useState, useEffect} from 'react'

const {get, set} = require('../utils/localStorage')

export default function usePageCounts(initial) {

    const [pageCount, setPageCount] = useState(() => {
        return get('page-count', initial)
    })

    pageCount+=1

    useEffect(() => {
        set('page-count', JSON.stringify(pageCount))
    })

    return [pageCount, setPageCount]
}