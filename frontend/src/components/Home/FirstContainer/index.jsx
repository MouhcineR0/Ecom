import React from 'react';
import SideBar from './SideBar';
import Slider from './Slider';
import useWidth from '../../../tools/useWidth';

function index() {
    const Width = useWidth();

    return (
        <div className='container mx-auto flex w-full'>
            {Width > 768 && <SideBar />}
            <Slider />
        </div>
    );
}

export default index;