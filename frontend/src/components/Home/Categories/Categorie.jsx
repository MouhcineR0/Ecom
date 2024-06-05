import React from 'react';
import useWidth from '../../../hooks/useWidth';

function Categorie({ Categorie }) {

    const Width = useWidth();

    return (
        <div className="rounded-sm border border-gray-400 py-5 flex items-center justify-center  hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <div className='flex flex-col gap-4 items-center'>
                <div
                    dangerouslySetInnerHTML={{ __html: ModifySVG(Categorie.picture, Width) }}
                    className=''
                />
                <h1 className='md:text-sm text-[12px]'>{Categorie.name}</h1>
            </div>
        </div>
    );
}

function ModifySVG(string, Width) {
    return Width > 769 ? string.replace('<svg', '<svg width="40px" height="40px"') : string.replace('<svg', '<svg width="20px" height="20px"');
}

export default Categorie;