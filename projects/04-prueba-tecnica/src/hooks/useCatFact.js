import { getNewFact } from '../services/facts'
import { useState, useEffect } from 'react'

export function useCatFact () {
    const [ fact, setFact ] = useState()

    useEffect(() => {
        getNewFact().then(newFact => setFact(newFact))
    }, [])

    const refreshFact = () => {
        getNewFact().then(newFact => setFact(newFact))
    }

    return { fact, refreshFact }
}