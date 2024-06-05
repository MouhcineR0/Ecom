import React from 'react';
import Button from '../../components/utils/Button';

function index() {
    return (
        <div className='flex flex-col gap-5 items-center my-20 font-poppins'>
            <h1 className='md:text-[100px] text-[75px] text-center'>404 Not Found</h1>
            <p className='text-[16px]'>Your visited page not found. You may go home page.</p>
            <Button To={'/'} Name={'Back to home page'} />
        </div>
    );
}

export default index;