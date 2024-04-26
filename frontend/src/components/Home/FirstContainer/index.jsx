import React from 'react';
import SideBar from './SideBar';
import Slider from './Slider';
import useWidth from '../../../tools/useWidth';
import FlashContainer from './FlashContainer';

function index() {
    const Width = useWidth();

    return (
        <>
            <div className='container mx-auto flex w-full'>
                {Width > 768 && <SideBar />}
                <Slider />
            </div>
            <FlashContainer targetDate={'2024-04-31T23:59:59'} />
        </>
    );
}

export default index;