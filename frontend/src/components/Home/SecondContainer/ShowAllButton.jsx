import React from 'react';
import { Link } from 'react-router-dom';

function ShowAllButton() {
    return (
        <div className='w-full mx-auto flex justify-center mt-[50px]'>
            <Link className='bg-primary text-white px-[48px] py-[16px] md:text-[16px] text-[15px] rounded-[4px] font-poppins font-medium hover:text-primary hover:bg-white border hover:border-primary'>
                View All Products
            </Link>
        </div>
    );
}

export default ShowAllButton;