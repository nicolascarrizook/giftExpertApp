import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {

    const { images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                loading && <p>Loading...</p>
            }
            <div className='card-grid'>
                {
                    images.map(( image ) => (
                        <GifGridItems
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}