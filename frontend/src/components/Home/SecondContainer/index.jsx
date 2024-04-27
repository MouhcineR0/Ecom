import React from 'react';
import FlashContainer from './FlashContainer';
import FlashProducts from './FlashProducts';

function index() {
    return (
        <>
            <FlashContainer targetDate={'2024-04-31T23:59:59'} />
            <FlashProducts />
        </>
    );
}

export default index;