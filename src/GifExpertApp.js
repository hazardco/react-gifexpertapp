import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategory] = useState(['One Punch'])

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategory={setCategory}
            />
            <hr />

            <ul>
                {
                    categories.map( category => (
                        <GifGrid 
                          key={ category }
                          category={ category }
                          
                          />
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default GifExpertApp;