import { useState, useEffect } from 'react'
import { getImageUrl } from '../services/images'

export function useCatImage ({ fact }) {
    const [ imageUrl, setImage ] = useState()

    // Recupera la imagen dependiendo del fact de los gatitos
    useEffect(() => {
        if (!fact) return
        //const firstWord = fact.split(' ')[0]
        const firstWord = fact.split(' ').slice(0,3).join(' ') //Recupera 3 primeras palaras y las junta de nuevo
        
        getImageUrl(firstWord).then(setImage)

    }, [fact])
    return { imageUrl }
}
