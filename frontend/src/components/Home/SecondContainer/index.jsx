import React, { useState } from 'react';
import FlashContainer from './FlashContainer';
import FlashProducts from './FlashProducts';
import ShowAllButton from './ShowAllButton';

function index() {

    // handling the second swiper #offers
    const [swiper, setSwiper] = useState(null);

    const TargetDate = '2024-09-31T23:59:59';

    return (
        <>
            <FlashContainer targetDate={TargetDate} setSwiper={setSwiper} swiper={swiper} />
            <FlashProducts setSwiper={setSwiper} swiper={swiper} />
            <ShowAllButton />
        </>
    );
}

export default index;