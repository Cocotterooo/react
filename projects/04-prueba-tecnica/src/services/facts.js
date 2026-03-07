const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'

// Recupera el fact de gatitos
/*export const getNewFact = () => {
    return fetch(CAT_ENDPOINT_FACT_URL)
        .then(res => {
            if (!res.ok) throw new Error('Error durante la petición')
            return res.json()
        })
        .then(data => {
            {
                const { fact } = data
                return (fact)
            }
        })
        .catch((err) => {
            return ('No se ha podido recuperar la cita sobre los gatos:', err)
        })
}*/

export const getNewFact = async () => {
    const res = await fetch(CAT_ENDPOINT_FACT_URL)
    if (!res.ok) throw new Error('Error durante la petición')
    const data = await res.json()
    const { fact } = data
    return fact
}