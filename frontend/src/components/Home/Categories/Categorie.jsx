import React from 'react';
import { MdMediaBluetoothOn } from 'react-icons/md';

function Categorie({ Categorie }) {

    return (
        <div className="rounded-sm border border-gray-400 py-5 flex items-center justify-center  hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <div className='flex flex-col gap-4 items-center'>
                <div
                    dangerouslySetInnerHTML={{ __html: ModifySVG(Categorie.picture) }}
                    className=''
                />
                <h1 className='text-sm'>{Categorie.name}</h1>
            </div>
        </div>
    );
}

function ModifySVG(string) {
    return string.replace('<svg', '<svg width="40px" height="40px"');
}

export default Categorie;