import React from 'react';
import { Link } from 'react-router-dom';

function ShowAllButton() {
    return (
        <div className='w-full mx-auto flex justify-center mt-[50px]'>
            <Link className='bg-primary text-white px-8 py-3 md:text-[17px] text-[15px] rounded-md font-poppins hover:text-primary hover:bg-white border hover:border-primary'>
                View All Products
            </Link>
        </div>
    );
}

export default ShowAllButton;