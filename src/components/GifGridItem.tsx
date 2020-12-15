import React from 'react'
import { Img } from '../img'
import '../animate.min.css'

export const GifGridItem = ( {id, title, url}: Img ) => {

    return (
        <div className="card animate__animated animate__fadeIn animate">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
