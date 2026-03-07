// Recupera una imagen de gatitos con un determinado texto
export const getImageUrl = async (firstWord) => {
    const res = await fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
    const response = await res.json()
    const { url } = response
    return url
}