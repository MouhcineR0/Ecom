import React from 'react';
import Categorie from './Categorie';

function List({ data }) {
    return (
        <div className='container mx-auto mt-4'>
            <div className='single-categorie grid grid-cols-6 gap-8'>
                {data.map((ele, index) => {
                    return <Categorie Categorie={ele} />;
                })}
            </div>
        </div>
    );
}

export default List;