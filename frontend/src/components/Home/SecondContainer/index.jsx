import React, { useState } from 'react';
import FlashContainer from './FlashContainer';
import FlashProducts from './FlashProducts';
import ShowAllButton from './ShowAllButton';

function index() {

    // handling the second swiper #offers
    const [swiper, setSwiper] = useState(null);

    const TargetDate = '2024-04-31T23:59:59';

    return (
        <>
            <FlashContainer targetDate={TargetDate} setSwiper={setSwiper} swiper={swiper} />
            <FlashProducts setSwiper={setSwiper} swiper={swiper} />
            <ShowAllButton />
            <hr className='w-[90%] mx-auto mt-[50px] border-[1px] border-[#e5e5e5]' />
        </>
    );
}

export default index;