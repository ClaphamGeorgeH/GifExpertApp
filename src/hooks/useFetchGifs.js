import { useState, useEffect} from "react"

import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
  
    const [images, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getImages = async() => {
        const newGifs = await getGifs (category);
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect( () => {
       getImages();
    }, [ ] )

    return {
        images: images,
        isLoading
    }
}
