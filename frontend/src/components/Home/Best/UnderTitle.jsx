import React from 'react';
import ShowAllButton from '../SecondContainer/ShowAllButton';
import Button from '../../utils/Button';

function UnderTitle() {
    return (
        <div className='flex mx-auto justify-between items-center'>
            <h1 className='text-[18px] lg:text-[24px] md:text-[21px] font-poppins font-semibold mt-2'>Best Selling Products</h1>
            <Button Name={'View All'} To={'/bestSelling'} />
        </div>
    );
}

export default UnderTitle;