// import { useEffect, useState } from "react";

// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GitGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            {
                isLoading
                ? (<h1>Cargando.............</h1>)
                : null
            }
            <h3 className="category-text">{category}</h3>
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}