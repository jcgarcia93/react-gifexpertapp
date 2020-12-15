import { Img } from '../img'

interface Props {
    category: string
}

export const getGifs = async ({category} :  Props) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=XZlalKcryzdYjJc571a0UV7Xvojd3Xkj`
    const resp = await fetch( url )
    const { data } = await resp.json();

    const gifs = data.map( (img: Img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    
    return gifs;
    
}