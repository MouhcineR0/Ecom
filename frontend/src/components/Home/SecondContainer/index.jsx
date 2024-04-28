import React, { useState } from 'react';
import FlashContainer from './FlashContainer';
import FlashProducts from './FlashProducts';
import ShowAllButton from './ShowAllButton';

function index() {

    // handling the second swiper #offers
    const [swiper, setSwiper] = useState(null);

    return (
        <>
            <FlashContainer targetDate={'2024-04-31T23:59:59'} setSwiper={setSwiper} swiper={swiper} />
            <FlashProducts setSwiper={setSwiper} swiper={swiper} />
            <ShowAllButton />
        </>
    );
}

export default index;