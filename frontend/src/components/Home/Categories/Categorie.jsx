import React from 'react';
import { MdMediaBluetoothOn } from 'react-icons/md';

function Categorie({ Categorie }) {

    const ff = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable"><path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/></svg>`;

    return (
        <div className="border border-grey-300 py-5 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300">
            <div className='flex flex-col gap-4 items-center'>
                <div
                    dangerouslySetInnerHTML={{ __html: ff }}
                    style={{ color: 'orange' }}
                />
                <h1 className='text-sm'>{Categorie.name}</h1>
            </div>
        </div>
    );
}

export default Categorie;