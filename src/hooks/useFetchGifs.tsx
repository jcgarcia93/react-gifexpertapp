import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { Img } from '../img'

interface Props {
    data: Img[]
    loading: boolean
}

interface cProps {
    category: string
}

export const useFetchGifs = ({ category }: cProps) => {
    
    const [state, setstate] = useState<Props>({
        data: [],
        loading: true
    })

    useEffect( () => {

        getGifs( {category} )
            .then( imgs => {

                    setstate({
                        data: imgs,
                        loading: false
                    })
                })

    }, [ category ])

    return state; // { data; [], loading: true}
}
