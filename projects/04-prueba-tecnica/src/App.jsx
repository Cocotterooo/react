import './style.css'

import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={ handleClick }>Nueva cita</button>
            {fact && <p>{fact}</p>} {/* Renderizado condicional */}
            {imageUrl && <img src={imageUrl} alt={`Image of a cat with the first word from: ${fact}`} ></img>}
        </main>
    )  
}   