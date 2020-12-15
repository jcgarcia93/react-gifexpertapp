import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import { Img } from '../img'

interface Props {
    category: string
}

export const GifGrid = ({category} :  Props) => {

    const { data: images, loading } = useFetchGifs({category})

    return (
        <>
        <h3>{ category }</h3>

        { loading && <p>Loading...</p> }

        <div className="card-grid">
                {
                    images.map( (img: Img) => {
                        return (
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                            />
                        )
                    })
                }
        </div>
        </>
    )
}
