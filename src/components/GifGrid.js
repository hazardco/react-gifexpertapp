import React, { Fragment } from 'react';
import GifItem from './GifItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {


    const { data:images , loading } = useFetchGifs(category);

    /*const [images, setImages] = useState([]);

    

  */

    return (
        <Fragment>
        <h3>{ category }</h3>
        { loading ? 'Cargando...' : 'Data cargada...' }
        <div className="card-grid">
                { images.map( img => (
                    <GifItem
                        key={img.id}
                        { ...img }
                    />
                )) }
        </div>
        </Fragment>
    )
}

export default GifGrid;